import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { ProgramComponent } from './pages/program/program.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biographie', component: BiographyComponent },
  { path: 'programme', component: ProgramComponent },
  { path: 'programme/:theme', component: ProgramDetailComponent },
  { path: 'actualites', component: NewsComponent },
  { path: 'actualites/:id', component: NewsDetailComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'benevoles', component: VolunteersComponent },
  { path: 'galerie', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }