import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Volunteer, VolunteerRegistration } from '../models/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private volunteers: Volunteer[] = [];

  registerVolunteer(registration: VolunteerRegistration): Observable<boolean> {
    const volunteer: Volunteer = {
      id: Date.now().toString(),
      ...registration,
      registrationDate: new Date(),
      status: 'pending'
    };
    
    this.volunteers.push(volunteer);
    return of(true);
  }

  getVolunteers(): Observable<Volunteer[]> {
    return of(this.volunteers);
  }

  getVolunteerStats(): Observable<{ total: number; active: number; pending: number }> {
    const total = this.volunteers.length;
    const active = this.volunteers.filter(v => v.status === 'active').length;
    const pending = this.volunteers.filter(v => v.status === 'pending').length;
    
    return of({ total, active, pending });
  }
}