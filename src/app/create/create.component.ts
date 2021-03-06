import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Tournament } from '../shared/tournament.model';
import { Team } from '../shared/team.model';
import { Router } from '@angular/router';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public tournament: Tournament;

  public form: FormGroup;
  public teamList: FormArray;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tournamentService: TournamentService
  ) { }


  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      races: [null, Validators.compose([Validators.required])],
      score: [null, Validators.compose([Validators.required])],
      teams: this.fb.array([this.teamFormGroup])
    });

    this.teamList = this.form.get('teams') as FormArray;
  }

  get teamFormGroup(): FormGroup {
    return this.fb.group({
      entrant: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      country: [null],
      drivers: this.fb.array([this.driverFormGroup])
    });
  }

  get driverFormGroup(): FormGroup {
    return this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      country: [null],
      number: [null, Validators.compose([Validators.required])]
    });
  }

  public addTeam(): void {
    this.teamList.push(this.teamFormGroup);
  }

  public removeTeam(index: number): void {
    this.teamList.removeAt(index);
  }

  public addDriver(team): void {
    team.get('drivers').push(this.driverFormGroup);
  }

  public removeDriver(team, index: number): void {
    team.get('drivers').removeAt(index);
  }

  public createTournament(): void {
    let teamArray: Team[] = [];

    for (let team of this.teamList.value) {
      teamArray.push(team);
    }
    this.tournament = new Tournament(
      this.form.get('name').value,
      this.form.get('races').value,
      this.form.get('score').value.split(' ').map(Number),
      teamArray
    );
    this.tournamentService.setTournament(this.tournament);
    this.router.navigate(['/race']);
  }
}
