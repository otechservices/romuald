export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  sentDate: Date;
  status: 'new' | 'read' | 'replied';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}