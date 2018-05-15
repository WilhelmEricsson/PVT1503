import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomMarker } from '../CustomMarker';

/*
  Generated class for the DailyRouteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var allMarkers: any[] = [];
var dailyMarkers: any[] = [];

@Injectable()
export class DailyRoutesProvider {
  
  constructor(public http: HttpClient) {
  }

  addMarker(mark: CustomMarker) {
    allMarkers.push(mark);
  }

  addDailyMarker(mark: CustomMarker) {
    dailyMarkers.push(mark);
  }

  getallMarkers() {
    return allMarkers;
  }

  getDailylMarkers() {
    return dailyMarkers;
  }

  chooseRandomMarker() {
    let rnd: number = Math.floor(Math.random() * allMarkers.length);
    return allMarkers[rnd];
  }

}
