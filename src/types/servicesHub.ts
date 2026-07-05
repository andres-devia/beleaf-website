export interface ServiceCatalogCard {
  icon: string;
  name: string;
  desc: string;
  incl: string[];
  href: string;
}

export interface IndustrySector {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface EngagementModel {
  icon: string;
  k: string;
  title: string;
  body: string;
}

export interface HubTool {
  name: string;
  icon: string;
}
