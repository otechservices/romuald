export interface Volunteer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string;
  motivation: string;
  registrationDate: Date;
  status: 'pending' | 'approved' | 'active';
}

export interface VolunteerRegistration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string;
  motivation: string;
}