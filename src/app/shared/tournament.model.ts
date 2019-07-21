export class Tournament {

    constructor(
        private name: string,
        private races: number,
        private score: number[]
    ) { }

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
}
