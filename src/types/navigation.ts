export interface PillarNavItem {
  slug: string;
  label: string;
  short: string;
  icon: string;
  live: boolean;
}

export interface NavPageLink {
  label: string;
  href: string;
  key: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}
