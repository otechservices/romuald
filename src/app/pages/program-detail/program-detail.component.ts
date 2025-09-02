import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';
import { ProgramTheme } from '../../models/program.model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  theme?: ProgramTheme;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {}

  ngOnInit() {
    const themeId = this.route.snapshot.paramMap.get('theme');
    if (themeId) {
      this.programService.getThemeById(themeId).subscribe(theme => {
        this.theme = theme;
        this.loading = false;
      });
    }
  }

  getPriorityLabel(priority: string): string {
    const labels: { [key: string]: string } = {
      'high': 'Priorité haute',
      'medium': 'Priorité moyenne',
      'low': 'Priorité faible'
    };
    return labels[priority] || priority;
  }

  getPriorityColor(priority: string): string {
    const colors: { [key: string]: string } = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  }
}