export interface PillarNavItem {
  key: string;
  slug: string;
  label: string;
  short: string;
  icon: string;
  live: boolean;
}

export interface FooterLink {
  key: string;
  label: string;
  href: string;
}

export interface FooterColumn {
  key: string;
  heading: string;
  links: FooterLink[];
}
