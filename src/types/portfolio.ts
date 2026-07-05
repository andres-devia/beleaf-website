export type ProjectSpan = "wide" | "tall" | "";

export interface Project {
  tag: string;
  title: string;
  metric: string;
  span: ProjectSpan;
}

export interface GalleryItem {
  client: string;
  category: string;
  navy: boolean;
}

export type ProjectCategory = "all" | "web" | "ecommerce" | "seo" | "ia" | "crm" | "branding";

export interface CaseStudy {
  slug: string;
  category: string;
  categoryKey: ProjectCategory;
  industry: string;
  title: string;
  desc: string;
  navy: boolean;
}

export interface Testimonial {
  initials: string;
  name: string;
  company: string;
  result: string;
  quote: string;
}
