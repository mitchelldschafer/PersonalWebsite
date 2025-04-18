export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  category: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}