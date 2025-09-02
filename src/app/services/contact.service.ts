import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactMessage, ContactForm } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private messages: ContactMessage[] = [];

  sendMessage(form: ContactForm): Observable<boolean> {
    const message: ContactMessage = {
      id: Date.now().toString(),
      ...form,
      sentDate: new Date(),
      status: 'new'
    };

    this.messages.push(message);
    return of(true);
  }

  getMessages(): Observable<ContactMessage[]> {
    return of(this.messages.sort((a, b) => b.sentDate.getTime() - a.sentDate.getTime()));
  }
}