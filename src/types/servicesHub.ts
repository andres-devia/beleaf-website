export interface ServiceCatalogCard {
  icon: string;
  name: string;
  desc: string;
  incl: string[];
  href: string;
}

export interface IndustrySector {
  key: string;
  icon: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface EngagementModel {
  key: string;
  icon: string;
  k: string;
  title: string;
  body: string;
}

export interface HubTool {
  name: string;
  icon: string;
}
