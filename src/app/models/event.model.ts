export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: EventLocation;
  type: 'meeting' | 'conference' | 'debate' | 'visit';
  capacity?: number;
  registeredCount?: number;
  image?: string;
}

export interface EventLocation {
  name: string;
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}