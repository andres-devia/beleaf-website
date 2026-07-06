import { NextRequest, NextResponse } from "next/server";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { createContactFormSchema } from "@/lib/validators";
import { isRateLimited } from "@/lib/rateLimit";
import { createLead } from "@/services/leadService";
import { routing } from "@/i18n/routing";
import type { ApiResponse } from "@/types/api";

/* Mongoose requires Node.js APIs (TCP sockets) that the Edge runtime does not
   expose, so this route runs on the default Node.js runtime rather than
   `edge` — Mongoose cannot connect to MongoDB from an edge function. */

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const requestedLocale = request.nextUrl.searchParams.get("locale");
  const locale = hasLocale(routing.locales, requestedLocale) ? requestedLocale : routing.defaultLocale;

  const [tApi, tValidation] = await Promise.all([
    getTranslations({ locale, namespace: "Api" }),
    getTranslations({ locale, namespace: "Validation" }),
  ]);

  if (isRateLimited(ip)) {
    const body: ApiResponse = { success: false, message: tApi("rateLimited") };
    return NextResponse.json(body, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    const body: ApiResponse = { success: false, message: tApi("invalidRequest") };
    return NextResponse.json(body, { status: 400 });
  }

  const ContactFormSchema = createContactFormSchema({
    nameTooShort: tValidation("nameTooShort"),
    emailInvalid: tValidation("emailInvalid"),
    messageTooShort: tValidation("messageTooShort"),
    selectService: tValidation("selectService"),
  });
  const parsed = ContactFormSchema.safeParse(json);
  if (!parsed.success) {
    const body: ApiResponse = { success: false, message: tApi("validationFailed") };
    return NextResponse.json(body, { status: 400 });
  }

  try {
    await createLead(parsed.data, ip);
  } catch (error) {
    console.error("createLead failed", error);
    const body: ApiResponse = { success: false, message: tApi("serverError") };
    return NextResponse.json(body, { status: 500 });
  }

  const body: ApiResponse = { success: true, message: tApi("success") };
  return NextResponse.json(body, { status: 200 });
}
