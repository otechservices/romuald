import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidate: Candidate = {
    id: '1',
    firstName: 'Romuald',
    lastName: 'Martin',
    fullName: 'Romuald Martin',
    slogan: 'Ensemble pour un avenir meilleur',
    photo: 'assets/candidate-photo.jpg',
    biography: {
      summary: 'Homme politique engagé avec plus de 15 ans d\'expérience dans le service public et le secteur privé.',
      education: [
        {
          institution: 'Sciences Po Paris',
          degree: 'Master en Administration Publique',
          year: '2008'
        },
        {
          institution: 'HEC Paris',
          degree: 'MBA',
          year: '2010'
        }
      ],
      career: [
        {
          position: 'Directeur Général',
          company: 'Ministère de l\'Économie',
          period: '2018-2024',
          description: 'Supervision des politiques économiques nationales et coordination avec les instances européennes.'
        },
        {
          position: 'Conseiller en Stratégie',
          company: 'Cabinet McKinsey & Company',
          period: '2010-2018',
          description: 'Conseil en transformation digitale et optimisation organisationnelle pour les entreprises du CAC 40.'
        }
      ],
      politicalEngagements: [
        'Membre du Conseil Municipal de Paris (2014-2020)',
        'Président de la Commission Économie et Finance',
        'Rapporteur sur la loi de transition énergétique'
      ],
      associativeEngagements: [
        'Président de l\'association "Éducation pour Tous"',
        'Membre du conseil d\'administration d\'Emmaüs France',
        'Ambassadeur de l\'UNICEF France'
      ]
    },
    socialMedia: {
      facebook: 'https://facebook.com/romualdmartin',
      twitter: 'https://twitter.com/romualdmartin',
      instagram: 'https://instagram.com/romualdmartin',
      linkedin: 'https://linkedin.com/in/romualdmartin',
      youtube: 'https://youtube.com/c/romualdmartin'
    }
  };

  getCandidate(): Observable<Candidate> {
    return of(this.candidate);
  }
}