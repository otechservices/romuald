import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        routerLink: '/'
      },
      {
        label: 'Biographie',
        routerLink: '/biographie'
      },
      {
        label: 'Programme',
        routerLink: '/programme'
      },
      {
        label: 'Actualités',
        routerLink: '/actualites'
      },
      {
        label: 'Agenda',
        routerLink: '/agenda'
      },
      {
        label: 'Bénévoles',
        routerLink: '/benevoles'
      },
      {
        label: 'Galerie',
        routerLink: '/galerie'
      },
      {
        label: 'Contact',
        routerLink: '/contact'
      }
    ];
  }
}