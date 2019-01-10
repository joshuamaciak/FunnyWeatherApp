export default class CurrentWeatherUpdate {
    timestamp: number;
    id: number;
    description: string;
    precipitationProbability: number;
    precipitationType: string;
    temperature: number;
    phrase: string;

    constructor() {
        this.timestamp = 0;
        this.id = 0;
        this.description = '';
        this.precipitationProbability = 0;
        this.precipitationType = '';
        this.temperature = 0;
        this.phrase = '';
    }
}