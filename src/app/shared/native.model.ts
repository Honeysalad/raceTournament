export class Native {
    constructor(
        private country: string
    ) {}

    public setCountry(country: string): void {
        this.country = country;
    }

    public getCountry(): string {
        return this.country;
    }
}