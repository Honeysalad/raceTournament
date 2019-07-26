import { Tournament } from './shared/tournament.model';

export class TournamentService {

    private tournament: Tournament;

    public getTournament(): Tournament {
        return this.tournament;
    }

    public setTournament(tournament: Tournament): void {
        this.tournament = tournament;
    }
}