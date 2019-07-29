import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Tournament } from '../shared/tournament.model';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  tournament: Tournament;

  public form: FormGroup;
  public leaderboard: FormArray;

  constructor(
    private tournamentService: TournamentService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.tournament = this.tournamentService.getTournament();
    console.log(this.tournament);

    this.form = this.fb.group({places: this.fb.array([])});
    this.leaderboard = this.form.get('places') as FormArray;

    for (let team of this.tournament.getTeams()) {
      for (let driver of team.getDrivers()) {
        this.leaderboard.push(this.placeFormGroup);
      }
    }
  }

  get placeFormGroup(): FormGroup {
    if (this.leaderboard.value.length < this.tournament.getScore().length) {
      console.log('points zone');
      return this.fb.group({
        place: [null, Validators.compose([Validators.required])]
      });
    } else {
      console.log('optional place');
      return this.fb.group({
        place: [null]
      });
    }
  }

  public endRace(): void {
    for (let i = 0; i < this.tournament.getScore().length; i++) {
      for (let team of this.tournament.getTeams()) {
        for (let driver of team.getDrivers()) {
          if (driver.getNo() === this.leaderboard.value[i].place) {
            driver.setPoints(driver.getPoints() + this.tournament.getScore()[i]);
            break;
          }
        }
      }
    }
    console.log(this.tournament.getTeams());
  }
}

