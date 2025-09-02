import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  candidate!: Candidate;

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidateService.getCandidate().subscribe(candidate => {
      this.candidate = candidate;
    });
  }
}