export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  slogan: string;
  photo: string;
  biography: Biography;
  socialMedia: SocialMedia;
}

export interface Biography {
  summary: string;
  education: Education[];
  career: Career[];
  politicalEngagements: string[];
  associativeEngagements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Career {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}