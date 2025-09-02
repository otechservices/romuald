import { Component, OnInit } from '@angular/core';

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  url: string;
  thumbnail: string;
  date: Date;
  location: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  filteredItems: MediaItem[] = [];
  selectedFilter: 'all' | 'photo' | 'video' = 'all';
  
  galleryImages: any[] = [];
  showGallery = false;
  activeIndex = 0;

  constructor() {}

  ngOnInit() {
    this.loadMediaItems();
  }

  loadMediaItems() {
    this.mediaItems = [
      {
        id: '1',
        type: 'photo',
        title: 'Meeting de lancement à Paris',
        url: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
        thumbnail: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
        date: new Date('2024-12-15'),
        location: 'Paris'
      },
      {
        id: '2',
        type: 'video',
        title: 'Interview sur l\'économie',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        date: new Date('2024-12-12'),
        location: 'Studio TV'
      },
      {
        id: '3',
        type: 'photo',
        title: 'Visite d\'entreprise à Lyon',
        url: 'https://images.pexels.com/photos/8500285/pexels-photo-8500285.jpeg',
        thumbnail: 'https://images.pexels.com/photos/8500285/pexels-photo-8500285.jpeg',
        date: new Date('2024-12-10'),
        location: 'Lyon'
      },
      {
        id: '4',
        type: 'photo',
        title: 'Rencontre avec les agriculteurs',
        url: 'https://images.pexels.com/photos/8369647/pexels-photo-8369647.jpeg',
        thumbnail: 'https://images.pexels.com/photos/8369647/pexels-photo-8369647.jpeg',
        date: new Date('2024-12-08'),
        location: 'Bretagne'
      },
      {
        id: '5',
        type: 'video',
        title: 'Débat sur l\'environnement',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.pexels.com/photos/8500285/pexels-photo-8500285.jpeg',
        date: new Date('2024-12-05'),
        location: 'Bordeaux'
      },
      {
        id: '6',
        type: 'photo',
        title: 'Meeting de Marseille',
        url: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
        thumbnail: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
        date: new Date('2024-12-03'),
        location: 'Marseille'
      }
    ];
    
    this.filteredItems = this.mediaItems;
    this.prepareGalleryImages();
  }

  filterMedia(type: 'all' | 'photo' | 'video') {
    this.selectedFilter = type;
    if (type === 'all') {
      this.filteredItems = this.mediaItems;
    } else {
      this.filteredItems = this.mediaItems.filter(item => item.type === type);
    }
    this.prepareGalleryImages();
  }

  prepareGalleryImages() {
    this.galleryImages = this.filteredItems
      .filter(item => item.type === 'photo')
      .map(item => ({
        previewImageSrc: item.url,
        thumbnailImageSrc: item.thumbnail,
        alt: item.title,
        title: item.title
      }));
  }

  openGallery(index: number) {
    this.activeIndex = index;
    this.showGallery = true;
  }

  openVideo(url: string) {
    window.open(url, '_blank');
  }
}