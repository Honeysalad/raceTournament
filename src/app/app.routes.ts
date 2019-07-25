import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RaceComponent } from './race/race.component';
import { ResultsComponent } from './results/results.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const ROUTES: Routes = [
    { path: '', component: CreateComponent },
    { path: 'race', component: RaceComponent},
    { path: 'results', component: ResultsComponent},
    { path: 'leaderboard', component: LeaderboardComponent}
];
