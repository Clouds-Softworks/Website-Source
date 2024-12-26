import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  detailedInfo: string;
  icon: ReactNode;
  gradient: string;
  features: string[];
  stats?: {
    level: number;
    unc: string;
    type: 'UNC' | 'sUNC';
    type2: 'External' | 'Internal'
  };
}
