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
      return this.fb.group({
        place: [null, Validators.compose([Validators.required])]
      });
    } else {
      return this.fb.group({
        place: [null]
      });
    }
  }

  public endRace(): void {
    let race: number[] = [];
    for (const [i, place] of this.leaderboard.controls.entries()) {
      for (let team of this.tournament.getTeams()) {
        for (let driver of team.getDrivers()) {
          console.log(place.value);
          if (driver.getNo() === place.value.place) {
            driver.assignPoints(i < this.tournament.getScore().length ? this.tournament.getScore()[i] : 0);
            break;
          }
        }
      }
    }

    for (let team of this.tournament.getTeams()) {
      for (let driver of team.getDrivers()) {
        if (driver.getPoints().length !== this.tournament.getDoneRaces() + 1) {
          driver.assignPoints(0);
        }
      }
    }

    this.tournamentService.setTournament(this.tournament);
    this.router.navigate(['/results']);
  }
}

