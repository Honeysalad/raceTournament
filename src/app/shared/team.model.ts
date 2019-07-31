import { Driver } from './driver.model';
import { Native } from './native.model';


export class Team extends Native {

    constructor(
        private entrant: string,
        private name: string,
        private drivers: Driver[],
        country: string,
    ) {
        super(country);
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setEntrant(entrant: string): void {
        this.entrant = entrant;
    }

    public getEntrant(): string {
        return this.entrant;
    }

    public setDrivers(drivers: Driver[]): void {
        this.drivers = drivers;
    }

    public getDrivers(): Driver[] {
        return this.drivers;
    }

    public sumPoints(): number {
        let points: number = 0;
        for (let driver of this.drivers) {
            points += driver.sumPoints();
        }
        return points;
    }
}
