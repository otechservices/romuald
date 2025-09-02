import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    {
      id: '1',
      title: 'Grand meeting de Lyon',
      description: 'Présentation du programme et échanges avec les citoyens',
      date: new Date('2025-01-15'),
      time: '19:00',
      location: {
        name: 'Palais des Sports de Lyon',
        address: '350 Avenue Jean Jaurès',
        city: 'Lyon',
        coordinates: { lat: 45.7640, lng: 4.8357 }
      },
      type: 'meeting',
      capacity: 8000,
      registeredCount: 5200,
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg'
    },
    {
      id: '2',
      title: 'Débat sur l\'environnement',
      description: 'Table ronde avec les experts du climat',
      date: new Date('2025-01-20'),
      time: '14:30',
      location: {
        name: 'Université de Bordeaux',
        address: '351 Cours de la Libération',
        city: 'Bordeaux',
        coordinates: { lat: 44.8378, lng: -0.5792 }
      },
      type: 'debate',
      capacity: 500,
      registeredCount: 320,
      image: 'https://images.pexels.com/photos/8500285/pexels-photo-8500285.jpeg'
    },
    {
      id: '3',
      title: 'Visite d\'entreprise innovante',
      description: 'Découverte des technologies vertes à Toulouse',
      date: new Date('2025-01-25'),
      time: '10:00',
      location: {
        name: 'Airbus Toulouse',
        address: '1 Rond-Point Maurice Bellonte',
        city: 'Toulouse',
        coordinates: { lat: 43.6047, lng: 1.4442 }
      },
      type: 'visit',
      capacity: 100,
      registeredCount: 85
    },
    {
      id: '4',
      title: 'Conférence sur l\'éducation',
      description: 'L\'école de demain : défis et opportunités',
      date: new Date('2025-02-01'),
      time: '16:00',
      location: {
        name: 'Sorbonne Université',
        address: '21 Rue de l\'École de Médecine',
        city: 'Paris',
        coordinates: { lat: 48.8566, lng: 2.3522 }
      },
      type: 'conference',
      capacity: 300,
      registeredCount: 180
    }
  ];

  getEvents(): Observable<Event[]> {
    return of(this.events.sort((a, b) => a.date.getTime() - b.date.getTime()));
  }

  getUpcomingEvents(): Observable<Event[]> {
    const now = new Date();
    const upcoming = this.events.filter(event => event.date > now);
    return of(upcoming.sort((a, b) => a.date.getTime() - b.date.getTime()));
  }

  getEventById(id: string): Observable<Event | undefined> {
    const event = this.events.find(e => e.id === id);
    return of(event);
  }
}