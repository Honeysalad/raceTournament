import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import { Tournament } from '../shared/tournament.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tournament: Tournament;
  race: number[];
  grid = [];

  constructor(
    private tournamentService: TournamentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tournament = this.tournamentService.getTournament();
    this.race = this.tournamentService.getLastRace();

    // tslint:disable: prefer-const
    for (let [i, no] of this.race.entries()) {
      for (let team of this.tournament.getTeams()) {
        for (let driver of team.getDrivers()) {
          if (driver.getNo() === no) {
            this.grid.push([driver.getName(), team.getName(), driver.getPoints()[driver.getPoints().length - 1]]);
          }
        }
      }
    }
  }

}
