import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';

// Pages
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    NewsCardComponent,
    ProgramCardComponent,
    EventCardComponent,
    HomeComponent,
    BiographyComponent,
    ProgramComponent,
    ProgramDetailComponent,
    NewsComponent,
    NewsDetailComponent,
    AgendaComponent,
    VolunteersComponent,
    GalleryComponent,
    ContactComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    GalleriaModule,
    CarouselModule,
    ToastModule,
    TabViewModule,
    TimelineModule,
    DividerModule,
    ChipModule,
    BadgeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }