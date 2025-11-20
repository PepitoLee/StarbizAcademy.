import { LucideIcon } from 'lucide-react';

export interface Intelligence {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Program {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  urgent?: boolean;
  cta: string;
}

export interface Community {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: 'cyan' | 'orange';
}