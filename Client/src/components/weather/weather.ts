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

  constructor(weatherImageSrc:string, temperature:number, weatherDescription:string){
    this._weatherImageSrc = weatherImageSrc;
    this._temperature = temperature;
    this._weatherDescription = weatherDescription;
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
}
