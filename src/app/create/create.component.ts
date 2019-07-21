import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tournament } from '../shared/tournament.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public tournament: Tournament;

  public form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'races': new FormControl(null, [Validators.required]),
    'score': new FormControl(null, [Validators.required]),
    'team1entrant': new FormControl(null, [Validators.required]),
    'team1name': new FormControl(null, [Validators.required]),
    'team1country': new FormControl(null, [Validators.required]),
    'team1pilot1name': new FormControl(null, [Validators.required]),
    'team1pilot1country': new FormControl(null, [Validators.required]),
    'team1pilot1number': new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  public createTournament(): void {
    console.log(this.form.controls);
  }

}
