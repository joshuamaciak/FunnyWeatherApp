import DailyWeatherUpdate from './DailyWeatherUpdate';
import CurrentWeatherUpdate from './CurrentWeatherUpdate';

export default class CompleteWeatherUpdate {
    timestamp: number;
    latitude: number;
    longitude: number;
    current: CurrentWeatherUpdate;
    daily: DailyWeatherUpdate[];

    constructor() {
        this.timestamp = 0;
        this.latitude  = 0;
        this.longitude = 0;
        this.current = new CurrentWeatherUpdate();
        this.daily   = [];
    }

    public static empty(): CompleteWeatherUpdate {
        let emptyUpdate = new CompleteWeatherUpdate();
        emptyUpdate.timestamp = 0;
        emptyUpdate.latitude  = 0;
        emptyUpdate.longitude = 0;
        emptyUpdate.current = new CurrentWeatherUpdate();
        emptyUpdate.daily   = [];
        return emptyUpdate;
    }
}