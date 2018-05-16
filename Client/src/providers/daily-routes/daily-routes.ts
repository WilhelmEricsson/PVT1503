import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomMarker } from '../CustomMarker';

/*
  Generated class for the DailyRouteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var allMarkers: any[] = [];
var dailyRouteMarkers: any[] = [];

@Injectable()
export class DailyRoutesProvider {
  
  constructor(public http: HttpClient) {
  }

  addMarker(mark: CustomMarker) {
    allMarkers.push(mark);
  }

  addDailyMarker(mark: CustomMarker) {
    dailyRouteMarkers.push(mark);
    mark.toggleVisited();
  }

  clearDailyRouteMarkers() {
    for (let m of dailyRouteMarkers) {
      var mark = <CustomMarker> m;
      mark.toggleVisited();
    }
    dailyRouteMarkers = [];
  }

  getallMarkers() {
    return allMarkers;
  }

  getDailylMarkers() {
    return dailyRouteMarkers;
  }

  chooseRandomMarker() {
    let rnd: number;
    for (var i = 0; i < allMarkers.length; i++) {
      console.log(i)
      rnd = Math.floor(Math.random() * allMarkers.length);
      var temp = <CustomMarker> allMarkers[rnd];
      if (!temp.visited) {
        return temp;
      } 
    }
  }
}
