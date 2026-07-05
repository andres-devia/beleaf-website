export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  servicePills: string[];
  sub: string;
  stats: StatItem[];
}

export interface TerminalLine {
  prompt: string;
  text: string;
  delayMs: number;
  muted?: boolean;
  ok?: boolean;
}
