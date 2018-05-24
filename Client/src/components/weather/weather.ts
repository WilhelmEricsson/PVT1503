import { Component } from '@angular/core';

/**
 * Generated class for the WeatherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherComponent {


  private _weatherImageSrc:string;
  private _temperature: number;
  private _weatherDescription:string;
  private _atHour:string;

  constructor(weatherImageSrc:string, temperature:number, weatherDescription:string, atHour:string){
    this._weatherImageSrc = weatherImageSrc;
    this._temperature = temperature;
    this._weatherDescription = weatherDescription;
    this._atHour = this.extractTimeHourMin(atHour);
  }

  extractTimeHourMin(timestamp: string){
    return timestamp.substr(11,5);

  }

  get weatherImageSrc(): string {
    return this._weatherImageSrc;
  }

  set weatherImageSrc(value: string) {
    this._weatherImageSrc = value;
  }

  get temperature(): number {
    return this._temperature;
  }

  set temperature(value: number) {
    this._temperature = value;
  }

  get weatherDescription(): string {
    return this._weatherDescription;
  }

  set weatherDescription(value: string) {
    this._weatherDescription = value;
  }

  get atHour(): string {
    return this._atHour;
  }

  set atHour(value: string) {
    this._atHour = value;
  }
}
