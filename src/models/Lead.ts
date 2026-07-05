import { Schema, model, models, type Document, type Model } from "mongoose";
import type { ServiceKey } from "@/types/contact";

export interface ILead extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  services: ServiceKey[];
  budget?: string;
  timeline?: string;
  source: string;
  ipHash: string;
  status: "new" | "contacted" | "closed";
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  message: { type: String, required: true },
  services: { type: [String], required: true },
  budget: { type: String },
  timeline: { type: String },
  source: { type: String, required: true, default: "website-contact" },
  ipHash: { type: String, required: true },
  status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  createdAt: { type: Date, default: Date.now },
});

export const Lead: Model<ILead> = models.Lead || model<ILead>("Lead", LeadSchema);
