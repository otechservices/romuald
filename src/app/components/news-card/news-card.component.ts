import { Component, Input } from '@angular/core';
import { NewsArticle } from '../../models/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() article!: NewsArticle;
  @Input() featured: boolean = false;
}