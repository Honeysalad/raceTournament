import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  constructor(
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    console.log(this.tournamentService.getTournament());
  }

}
