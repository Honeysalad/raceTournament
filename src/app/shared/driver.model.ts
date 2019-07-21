import { Native } from './native.model';

export class Driver extends Native {

    constructor(
        private name: string,
        private no: number,
        private points: number,
        country: string
    ) {
        super(country);
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

    public setPoints(points: number): void {
        this.points = points;
    }

    public getPoints(): number {
        return this.points;
    }

}
