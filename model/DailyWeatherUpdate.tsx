export default class DailyWeatherUpdate {
    timestamp: number;
    id: number;
    description: string;
    precipitationProbability: number;
    temperatureLow: number;
    temperatureHigh: number;

    constructor() {
        this.timestamp = 0;
        this.id = 0;
        this.description = '';
        this.precipitationProbability = 0;
        this.temperatureLow = 0;
        this.temperatureHigh = 0;
    }

}