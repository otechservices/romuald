import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup;
  loading = false;
  subscriberCount = 0;

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService,
    private messageService: MessageService
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.loadSubscriberCount();
  }

  loadSubscriberCount() {
    this.newsletterService.getSubscriberCount().subscribe(count => {
      this.subscriberCount = count;
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      this.loading = true;
      
      this.newsletterService.subscribe(this.newsletterForm.value).subscribe({
        next: (success) => {
          if (success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Inscription réussie',
              detail: 'Vous êtes maintenant abonné à notre newsletter !'
            });
            this.newsletterForm.reset();
            this.loadSubscriberCount();
          } else {
            this.messageService.add({
              severity: 'warn',
              summary: 'Déjà inscrit',
              detail: 'Cette adresse email est déjà inscrite à notre newsletter.'
            });
          }
          this.loading = false;
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Une erreur est survenue. Veuillez réessayer.'
          });
          this.loading = false;
        }
      });
    } else {
      this.newsletterForm.get('email')?.markAsTouched();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.newsletterForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}