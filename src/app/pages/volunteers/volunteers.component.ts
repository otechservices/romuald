import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { VolunteerService } from '../../services/volunteer.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {
  volunteerForm: FormGroup;
  loading = false;
  
  availableSkills = [
    'Communication',
    'Organisation d\'événements',
    'Réseaux sociaux',
    'Graphisme',
    'Développement web',
    'Traduction',
    'Logistique',
    'Comptabilité',
    'Juridique',
    'Relations presse'
  ];

  availabilityOptions = [
    'Quelques heures par semaine',
    'Une journée par semaine',
    'Plusieurs jours par semaine',
    'Temps plein',
    'Uniquement les week-ends',
    'Selon mes disponibilités'
  ];

  constructor(
    private fb: FormBuilder,
    private volunteerService: VolunteerService,
    private messageService: MessageService
  ) {
    this.volunteerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]+$/)]],
      skills: [[], Validators.required],
      availability: ['', Validators.required],
      motivation: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.volunteerForm.valid) {
      this.loading = true;
      
      this.volunteerService.registerVolunteer(this.volunteerForm.value).subscribe({
        next: (success) => {
          if (success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Inscription réussie',
              detail: 'Votre candidature a été enregistrée. Nous vous contacterons bientôt.'
            });
            this.volunteerForm.reset();
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
      this.markFormGroupTouched();
    }
  }

  onSkillChange(event: any) {
    const skills = this.volunteerForm.get('skills')?.value || [];
    if (event.target.checked) {
      skills.push(event.target.value);
    } else {
      const index = skills.indexOf(event.target.value);
      if (index > -1) {
        skills.splice(index, 1);
      }
    }
    this.volunteerForm.patchValue({ skills });
  }
  private markFormGroupTouched() {
    Object.keys(this.volunteerForm.controls).forEach(key => {
      this.volunteerForm.get(key)?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.volunteerForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}