import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsArticle } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles: NewsArticle[] = [
    {
      id: '1',
      title: 'Lancement officiel de la campagne présidentielle',
      summary: 'Romuald Martin annonce officiellement sa candidature lors d\'un grand meeting à Paris',
      content: 'Devant plus de 10 000 personnes réunies au Palais des Sports de Paris, Romuald Martin a officiellement lancé sa campagne présidentielle. Dans un discours de 45 minutes, le candidat a présenté les grandes lignes de son programme axé sur la justice sociale, l\'innovation et la transition écologique...',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
      author: 'Équipe de campagne',
      publishDate: new Date('2024-12-15'),
      category: 'Campagne',
      tags: ['lancement', 'meeting', 'paris'],
      featured: true
    },
    {
      id: '2',
      title: 'Présentation du programme économique',
      summary: 'Découvrez les 20 mesures phares pour relancer l\'économie française',
      content: 'Le programme économique de Romuald Martin se structure autour de trois axes majeurs : le soutien aux entreprises, l\'innovation technologique et la formation professionnelle. Parmi les mesures phares, on retrouve la baisse des charges pour les PME, la création d\'un fonds d\'investissement de 50 milliards d\'euros...',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      author: 'Équipe économique',
      publishDate: new Date('2024-12-10'),
      category: 'Programme',
      tags: ['économie', 'entreprises', 'innovation'],
      featured: true
    },
    {
      id: '3',
      title: 'Tournée des régions : première étape en Bretagne',
      summary: 'Le candidat entame sa tournée nationale par la Bretagne pour rencontrer les citoyens',
      content: 'La tournée nationale de Romuald Martin a débuté par la Bretagne, région emblématique de l\'innovation maritime et de l\'agriculture durable. Lors de ses déplacements à Rennes, Brest et Quimper, le candidat a pu échanger avec les acteurs locaux...',
      image: 'https://images.pexels.com/photos/8369647/pexels-photo-8369647.jpeg',
      author: 'Correspondant régional',
      publishDate: new Date('2024-12-08'),
      category: 'Déplacements',
      tags: ['bretagne', 'tournée', 'rencontres'],
      featured: false
    },
    {
      id: '4',
      title: 'Débat sur l\'éducation : les propositions du candidat',
      summary: 'Réforme du système éducatif et revalorisation du métier d\'enseignant',
      content: 'L\'éducation est au cœur du projet de société de Romuald Martin. Le candidat propose une réforme ambitieuse du système éducatif français, avec notamment la réduction des effectifs par classe, la revalorisation salariale des enseignants...',
      image: 'https://images.pexels.com/photos/8500285/pexels-photo-8500285.jpeg',
      author: 'Équipe éducation',
      publishDate: new Date('2024-12-05'),
      category: 'Programme',
      tags: ['éducation', 'enseignants', 'réforme'],
      featured: false
    }
  ];

  getArticles(): Observable<NewsArticle[]> {
    return of(this.articles);
  }

  getFeaturedArticles(): Observable<NewsArticle[]> {
    const featured = this.articles.filter(article => article.featured);
    return of(featured);
  }

  getArticleById(id: string): Observable<NewsArticle | undefined> {
    const article = this.articles.find(a => a.id === id);
    return of(article);
  }

  getArticlesByCategory(category: string): Observable<NewsArticle[]> {
    const filtered = this.articles.filter(article => article.category === category);
    return of(filtered);
  }
}