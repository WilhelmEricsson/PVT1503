import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import {WeatherComponent} from "../../components/weather/weather";
import {WeatherForecastProvider} from "../../providers/weather-forecast/weather-forecast";

/**
 * Generated class for the WeatherForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather-forecast',
  templateUrl: 'weather-forecast.html',
})
export class WeatherForecastPage {
  weatherComponents: Iterable<WeatherComponent> = [];



  constructor(private navParams: NavParams, private viewController:ViewController, private weatherForecastProvider: WeatherForecastProvider) {

  }

  ionViewWillLoad() {
  }

  ionViewDidLoad(){
    this.weatherComponents = this.weatherForecastProvider.getWeatherForecast();
  }


  closeWeatherForecastModal(){
    this.viewController.dismiss();
  }


}
