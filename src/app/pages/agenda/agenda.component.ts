import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  events: Event[] = [];
  selectedEvent?: Event;
  mapCenter = { lat: 46.603354, lng: 1.888334 }; // Centre de la France

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  selectEvent(event: Event) {
    this.selectedEvent = event;
    this.mapCenter = event.location.coordinates;
  }

  getEventTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'meeting': 'pi pi-users',
      'conference': 'pi pi-microphone',
      'debate': 'pi pi-comments',
      'visit': 'pi pi-map-marker'
    };
    return icons[type] || 'pi pi-calendar';
  }
}