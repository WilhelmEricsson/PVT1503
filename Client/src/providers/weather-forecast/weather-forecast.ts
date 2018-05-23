import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {WEATHER_DATA_URL} from "../../config";
import {WeatherComponent} from "../../components/weather/weather";
import 'rxjs/add/operator/do'
import {delay} from "rxjs/operator/delay";
import {Observable} from "rxjs/Observable";
import {resolveDefinition} from "@angular/core/src/view/util";


/*
  Generated class for the WeatherForecastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const TEMPERATURE_PARAM = 11;
const WEATHERSYMBOL_PARAM = 18;
const RAIN_SOMETHING_PARAM = 2;
const NUM_OF_PREDICTIONS_TO_FETCH = 5;

@Injectable()
export class WeatherForecastProvider {
  /*
     weatherIconArray nummerförklaring
     1 = Sol bild, 2 = sol och moln, 3 = moln bild, 4 = Regn bild, 5 = åska bild,6 = snö bild
    */
  private weatherIconArray: number[] = [1,1,2,2,3,3,3,4,4,4,5,6,6,6,6,6,6,4,4,4,5,6,6,6,6,6,6];
  /*
  * weatherDescriptions: string[] ska flyttas till DB
  */
  private weatherDescriptions: string[] = ["Clear sky","Nearly clear sky", "Variable cloudiness","Halfclear sky", "Cloudy sky","Overcast","Fog", "Light rain showers", "Moderate rain showers", "Heavy rain showers",
    "Thunderstorm", "Light sleet showers", "Moderate sleet showers", "Heavy sleet showers", "Light snow showers", "Moderate snow showers", "Heavy snow showers", "Light rain",
    "Moderate rain", "Heavy rain", "Thunder", "Light sleet", "Moderate sleet", "Heavy sleet", "Light snowfall", "Moderate snowfall", "Heavy snowfall"];
  weatherAtHour: string[] = ["Current", "In 1 Hour", "In 2 Hours", "In 3 Hours", "In 4 Hours"];
  weatherIndex:number;
  private weatherForecast: WeatherComponent[] = [];

  constructor(private http: HttpClient) {
  }

  fetchForecastFromSource(){
   console.log("TEST1 --> fetchForecastFromSource()" );
   this.weatherForecast = []; // tanken är att den ska reset:a då addItem pushar på nya element vilket kan leda till att fel värden visas.
   return this.http.get(WEATHER_DATA_URL);
  }

  getCurrentWeather(): WeatherComponent{
    return this.weatherForecast[0];
  }


  addItemToForecast(forecastItem){
    let weather = forecastItem;
    var temperature = weather.parameters[TEMPERATURE_PARAM].values[0];
    var weatherSymbol = weather.parameters[WEATHERSYMBOL_PARAM].values[0];
    var weatherDesc = this.weatherDescriptions[weatherSymbol-1];
    var weatherImageSrc = "assets/imgs/weather/weather" + this.weatherIconArray[weatherSymbol-1] + ".png";
    var weatherComponent = new WeatherComponent(weatherImageSrc,temperature,weatherDesc, weather.validTime);
    this.weatherForecast.push(weatherComponent);
  }

  getWeatherForecast(): Iterable<WeatherComponent> {
    return this.weatherForecast;
  }
  resetWeatherIndex(){
    if(this.weatherIndex >= NUM_OF_PREDICTIONS_TO_FETCH){
      this.weatherIndex = 0;
    }
  }

}
