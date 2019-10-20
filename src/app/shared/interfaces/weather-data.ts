export interface WeatherData{
    weather: [
        {
            description: string;
            icon: string;
        }];
        main: {
            temp: number;
        };
        sys: {
            coutry: string;
        };
        coord: {
            lon: number;
            lat: number;
        };
        name: string;
}
