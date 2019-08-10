import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
  keyframes
} from '@angular/animations';

import { TournamentService } from '../tournament.service';
import { Tournament } from '../shared/tournament.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('500ms', [
          animate('1000ms ease-in-out', keyframes([
            style({opacity: 0.1, transform: 'translateY(400%)', offset: .1}),
            style({opacity: 0.7, transform: 'translateY(120%)', offset: .7}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class ResultsComponent implements OnInit {

  tournament: Tournament;
  race: number[];
  grid = [];

  constructor(
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    this.tournament = this.tournamentService.getTournament();
    this.race = this.tournamentService.getLastRace();

    // tslint:disable: prefer-const
    for (let no of this.race) {
      for (let team of this.tournament.getTeams()) {
        for (let driver of team.getDrivers()) {
          if (driver.getNo() === no) {
            this.grid.push(
              [driver.getName(), team.getName(), driver.getPoints()[driver.getPoints().length - 1], 'created']
            );
          }
        }
      }
    }

  }

}
