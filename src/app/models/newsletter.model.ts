export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscriptionDate: Date;
  status: 'active' | 'unsubscribed';
}

export interface NewsletterSubscription {
  email: string;
}