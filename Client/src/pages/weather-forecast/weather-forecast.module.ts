import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherForecastPage } from './weather-forecast';

@NgModule({
  declarations: [
    WeatherForecastPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherForecastPage),
  ],
})
export class WeatherForecastPageModule {}
