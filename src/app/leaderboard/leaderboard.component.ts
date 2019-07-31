import { Component, OnInit } from '@angular/core';
import { Driver } from '../shared/driver.model';
import { Team } from '../shared/team.model';
import { Tournament } from '../shared/tournament.model';
import { TournamentService } from '../tournament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  private driversLeaderboard = [];
  private teamsLeaderboard: Team[] = [];

  private tournament: Tournament;

  constructor(
    private tournamentService: TournamentService,
    private router: Router
  ) { }

  ngOnInit() {
    // tslint:disable: prefer-const
    this.tournament = this.tournamentService.getTournament();
    for (let team of this.tournament.getTeams()) {
      for (let driver of team.getDrivers()) {
        this.driversLeaderboard.push([driver.getName(), team.getName(), driver.sumPoints()]);
      }
      this.teamsLeaderboard.push(team);
    }
    this.driversLeaderboard.sort((a, b) => {
      return a[2] > b[2] ? -1 : a[2] < b[2] ? 1 : 0;
    });
    this.teamsLeaderboard.sort((a, b) => {
      return a.sumPoints() > b.sumPoints() ? -1 : a.sumPoints() < b.sumPoints() ? 1 : 0;
    });
  }

  public exit(): void {
    if (this.tournament.getDoneRaces() === this.tournament.getRaces()) {
      this.router.navigate(['/create']);
    } else { this.router.navigate(['/race']); }
  }

}
