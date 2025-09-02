import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProgramTheme } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private themes: ProgramTheme[] = [
    {
      id: 'economie',
      title: 'Économie',
      description: 'Relancer la croissance et créer des emplois durables',
      icon: 'pi pi-chart-line',
      color: 'bg-blue-500',
      proposals: [
        {
          id: '1',
          title: 'Baisse des charges pour les PME',
          description: 'Réduction de 30% des charges sociales pour les entreprises de moins de 50 salariés',
          details: 'Cette mesure permettra aux petites et moyennes entreprises de retrouver de la compétitivité et de créer des emplois. Elle sera financée par une optimisation des dépenses publiques et une lutte renforcée contre la fraude fiscale.',
          priority: 'high',
          budget: '15 milliards d\'euros',
          timeline: '6 mois'
        },
        {
          id: '2',
          title: 'Plan d\'investissement dans l\'innovation',
          description: 'Création d\'un fonds de 50 milliards pour soutenir les startups et la recherche',
          details: 'Ce plan massif d\'investissement permettra de positionner la France comme leader européen de l\'innovation technologique.',
          priority: 'high',
          budget: '50 milliards d\'euros',
          timeline: '5 ans'
        }
      ]
    },
    {
      id: 'sante',
      title: 'Santé',
      description: 'Un système de santé accessible et de qualité pour tous',
      icon: 'pi pi-heart',
      color: 'bg-red-500',
      proposals: [
        {
          id: '3',
          title: 'Recrutement de 100 000 soignants',
          description: 'Plan massif de recrutement pour réduire les délais d\'attente',
          details: 'Formation accélérée, revalorisation salariale et amélioration des conditions de travail pour attirer de nouveaux talents dans le secteur de la santé.',
          priority: 'high',
          budget: '20 milliards d\'euros',
          timeline: '3 ans'
        }
      ]
    },
    {
      id: 'education',
      title: 'Éducation',
      description: 'Former les citoyens de demain avec excellence',
      icon: 'pi pi-book',
      color: 'bg-green-500',
      proposals: [
        {
          id: '4',
          title: 'Réduction des effectifs par classe',
          description: 'Maximum 20 élèves par classe dans le primaire',
          details: 'Cette mesure permettra un suivi personnalisé de chaque élève et une amélioration significative de la qualité de l\'enseignement.',
          priority: 'high',
          budget: '8 milliards d\'euros',
          timeline: '2 ans'
        }
      ]
    },
    {
      id: 'securite',
      title: 'Sécurité',
      description: 'Garantir la sécurité de tous les citoyens',
      icon: 'pi pi-shield',
      color: 'bg-orange-500',
      proposals: [
        {
          id: '5',
          title: 'Recrutement de 15 000 policiers',
          description: 'Renforcement des effectifs de police sur tout le territoire',
          details: 'Amélioration de la présence policière dans les quartiers sensibles et renforcement de la police de proximité.',
          priority: 'high',
          budget: '3 milliards d\'euros',
          timeline: '2 ans'
        }
      ]
    },
    {
      id: 'environnement',
      title: 'Environnement',
      description: 'Transition écologique et développement durable',
      icon: 'pi pi-globe',
      color: 'bg-emerald-500',
      proposals: [
        {
          id: '6',
          title: 'Plan de rénovation énergétique',
          description: 'Rénovation de 2 millions de logements en 5 ans',
          details: 'Aide financière pour la rénovation énergétique des logements, création d\'emplois verts et réduction des émissions de CO2.',
          priority: 'high',
          budget: '25 milliards d\'euros',
          timeline: '5 ans'
        }
      ]
    },
    {
      id: 'social',
      title: 'Social',
      description: 'Justice sociale et solidarité nationale',
      icon: 'pi pi-users',
      color: 'bg-purple-500',
      proposals: [
        {
          id: '7',
          title: 'Revalorisation du SMIC',
          description: 'Augmentation de 200 euros nets du salaire minimum',
          details: 'Cette revalorisation permettra d\'améliorer le pouvoir d\'achat des travailleurs les plus modestes.',
          priority: 'high',
          budget: '12 milliards d\'euros',
          timeline: '1 an'
        }
      ]
    }
  ];

  getThemes(): Observable<ProgramTheme[]> {
    return of(this.themes);
  }

  getThemeById(id: string): Observable<ProgramTheme | undefined> {
    const theme = this.themes.find(t => t.id === id);
    return of(theme);
  }
}