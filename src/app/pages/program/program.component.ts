import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ProgramTheme } from '../../models/program.model';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  themes: ProgramTheme[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.programService.getThemes().subscribe(themes => {
      this.themes = themes;
    });
  }
}