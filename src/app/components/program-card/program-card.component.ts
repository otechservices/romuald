import { Component, Input } from '@angular/core';
import { ProgramTheme } from '../../models/program.model';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.css']
})
export class ProgramCardComponent {
  @Input() theme!: ProgramTheme;
}