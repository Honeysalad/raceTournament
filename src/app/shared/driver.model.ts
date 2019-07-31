import { Native } from './native.model';

export class Driver extends Native {

    private points: number[];

    constructor(
        private name: string,
        private no: number,
        country: string
    ) {
        super(country);
        this.points = [];
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setNo(no: number): void {
        this.no = no;
    }

    public getNo(): number {
        return this.no;
    }

    public setPoints(points: number[]): void {
        this.points = points;
    }

    public getPoints(): number[] {
        return this.points;
    }

    public assignPoints(points: number): void {
        this.points.push(points);
    }

    public sumPoints(): number {
        return this.points.reduce((total, num) => total + num , 0);
    }

}
