import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: NewsArticle[] = [];
  filteredArticles: NewsArticle[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Toutes';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.newsService.getArticles().subscribe(articles => {
      this.articles = articles.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
      this.filteredArticles = this.articles;
      this.extractCategories();
    });
  }

  extractCategories() {
    const uniqueCategories = [...new Set(this.articles.map(article => article.category))];
    this.categories = ['Toutes', ...uniqueCategories];
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'Toutes') {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(article => article.category === category);
    }
  }
}