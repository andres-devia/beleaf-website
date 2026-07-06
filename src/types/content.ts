export interface StatItem {
  key: string;
  value: number;
  suffix: string;
  label: string;
}

export interface HeroPillOption {
  key: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  servicePills: HeroPillOption[];
  sub: string;
  stats: StatItem[];
}

export interface TerminalLine {
  key: string;
  prompt: string;
  text: string;
  delayMs: number;
  muted?: boolean;
  ok?: boolean;
}
