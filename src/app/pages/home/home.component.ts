import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { EventService } from '../../services/event.service';
import { NewsArticle } from '../../models/news.model';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredNews: NewsArticle[] = [];
  upcomingEvents: Event[] = [];

  constructor(
    private newsService: NewsService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.loadFeaturedNews();
    this.loadUpcomingEvents();
  }

  loadFeaturedNews() {
    this.newsService.getFeaturedArticles().subscribe(articles => {
      this.featuredNews = articles.slice(0, 3);
    });
  }

  loadUpcomingEvents() {
    this.eventService.getUpcomingEvents().subscribe(events => {
      this.upcomingEvents = events.slice(0, 3);
    });
  }
}