import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'pi pi-facebook', url: 'https://facebook.com/romualdmartin', label: 'Facebook' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com/romualdmartin', label: 'Twitter' },
    { icon: 'pi pi-instagram', url: 'https://instagram.com/romualdmartin', label: 'Instagram' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com/in/romualdmartin', label: 'LinkedIn' },
    { icon: 'pi pi-youtube', url: 'https://youtube.com/c/romualdmartin', label: 'YouTube' }
  ];
}