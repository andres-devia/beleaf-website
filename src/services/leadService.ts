import { connectToDatabase } from "@/lib/mongodb";
import { hashIp } from "@/lib/hash";
import { Lead, type ILead } from "@/models/Lead";
import type { ContactFormInput } from "@/lib/validators";

export async function createLead(data: ContactFormInput, ip: string): Promise<ILead> {
  await connectToDatabase();
  return Lead.create({
    name: data.name,
    email: data.email,
    phone: data.phone || undefined,
    company: data.company || undefined,
    message: data.message,
    services: data.services,
    budget: data.budget || undefined,
    timeline: data.timeline || undefined,
    source: data.source,
    ipHash: hashIp(ip),
  });
}
