import { NextRequest, NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/validators";
import { isRateLimited } from "@/lib/rateLimit";
import { createLead } from "@/services/leadService";
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

  if (isRateLimited(ip)) {
    const body: ApiResponse = { success: false, message: "Demasiadas solicitudes. Intenta de nuevo en un rato." };
    return NextResponse.json(body, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    const body: ApiResponse = { success: false, message: "Solicitud inválida." };
    return NextResponse.json(body, { status: 400 });
  }

  const parsed = ContactFormSchema.safeParse(json);
  if (!parsed.success) {
    const body: ApiResponse = { success: false, message: "Revisa los datos del formulario." };
    return NextResponse.json(body, { status: 400 });
  }

  try {
    await createLead(parsed.data, ip);
  } catch (error) {
    console.error("createLead failed", error);
    const body: ApiResponse = { success: false, message: "No pudimos guardar tu solicitud. Intenta de nuevo." };
    return NextResponse.json(body, { status: 500 });
  }

  const body: ApiResponse = { success: true, message: "¡Solicitud enviada! Te respondemos en menos de 24 horas hábiles." };
  return NextResponse.json(body, { status: 200 });
}
