import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsletterSubscriber, NewsletterSubscription } from '../models/newsletter.model';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private subscribers: NewsletterSubscriber[] = [];

  subscribe(subscription: NewsletterSubscription): Observable<boolean> {
    // Check if email already exists
    const exists = this.subscribers.some(sub => sub.email === subscription.email);
    if (exists) {
      return of(false);
    }

    const subscriber: NewsletterSubscriber = {
      id: Date.now().toString(),
      email: subscription.email,
      subscriptionDate: new Date(),
      status: 'active'
    };

    this.subscribers.push(subscriber);
    return of(true);
  }

  getSubscribers(): Observable<NewsletterSubscriber[]> {
    return of(this.subscribers);
  }

  getSubscriberCount(): Observable<number> {
    const activeCount = this.subscribers.filter(sub => sub.status === 'active').length;
    return of(activeCount);
  }
}