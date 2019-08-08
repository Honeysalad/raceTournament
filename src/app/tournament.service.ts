import { Tournament } from './shared/tournament.model';

export class TournamentService {

    private tournament: Tournament;
    private races: number[][] = [];

    public getTournament(): Tournament {
        return this.tournament;
    }

    public setTournament(tournament: Tournament): void {
        this.tournament = tournament;
    }

    public getRaces(): number[][] {
        return this.races;
    }

    public getLastRace(): number[] {
        return this.races[this.races.length - 1];
    }

    public registerRace(race: number[]): void {
        this.races.push(race);
    }
}
