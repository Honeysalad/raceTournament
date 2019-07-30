import { Team } from './team.model';

export class Tournament {

    private doneRaces: number;

    constructor(
        private name: string,
        private races: number,
        private score: number[],
        private teams: Team[]
    ) { this.doneRaces = 0; }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setRaces(races: number): void {
        this.races = races;
    }

    public getRaces(): number {
        return this.races;
    }

    public setScore(score: number[]): void {
        this.score = score;
    }

    public getScore(): number[] {
        return this.score;
    }

    public setTeams(teams: Team[]): void {
        this.teams = teams;
    }

    public getTeams(): Team[] {
        return this.teams;
    }

    public doRace(): void {
        this.doneRaces += 1;
    }
}
