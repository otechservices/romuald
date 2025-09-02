import { Component, Input } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() event!: Event;

  getEventTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      'meeting': 'Meeting',
      'conference': 'Conférence',
      'debate': 'Débat',
      'visit': 'Visite'
    };
    return labels[type] || type;
  }

  getEventTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'meeting': 'bg-blue-100 text-blue-800',
      'conference': 'bg-green-100 text-green-800',
      'debate': 'bg-orange-100 text-orange-800',
      'visit': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  }
}