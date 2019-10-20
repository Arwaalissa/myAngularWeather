import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { Weather } from 'src/app/shared/interfaces/weather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  constructor(private weatherdataService: WeatherDataService) { }

  ngOnInit() {
  }

  get weather(): Weather {
return this.weatherdataService.weather;
  }
}
