export interface ProgramTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  proposals: Proposal[];
  infographics?: string[];
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  details: string;
  priority: 'high' | 'medium' | 'low';
  budget?: string;
  timeline?: string;
}