import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

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

  constructor(private navParams: NavParams, private viewController:ViewController) {
  }

  ionViewWillLoad() {

  }

  closeWeatherForecastModal(){
    this.viewController.dismiss();
  }

}
