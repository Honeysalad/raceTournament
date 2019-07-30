import { Tournament } from './shared/tournament.model';
import { TOURNAMENT } from './tournament';
export class TournamentService {

    private tournament: Tournament = TOURNAMENT;
    private races: number[][] = [];

    public getTournament(): Tournament {
        return this.tournament;
    }

    public setTournament(tournament: Tournament): void {
        this.tournament = tournament;
    }
}
