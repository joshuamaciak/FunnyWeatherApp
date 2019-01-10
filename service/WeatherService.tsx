import axios, { AxiosPromise } from 'axios';

export default class WeatherService {
    private constructor() {}
    private static INSTANCE: WeatherService;
    private static WEATHER_SERVICE_HOST = "http://localhost:5000";
    private static ENDPOINT_ALL_COORD = "/all/coord/";
    public static getInstance(): WeatherService {
        return this.INSTANCE || (this.INSTANCE = new this());
    }

    public getWeatherUpdate(latitude: number, longitude: number): AxiosPromise {
        const url = `${WeatherService.WEATHER_SERVICE_HOST}${WeatherService.ENDPOINT_ALL_COORD}${latitude}&${longitude}`;
        return axios.get(url);
    }
}