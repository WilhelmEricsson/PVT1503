import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomMarker } from '../CustomMarker';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DailyRouteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var allMarkers: any[] = [];
var dailyRouteMarkers: any[] = [];

@Injectable()
export class DailyRoutesProvider {
  
  constructor(public http: HttpClient, private storage: Storage) {
  }

  addDailyMarker(mark: CustomMarker) {
    dailyRouteMarkers = [];
    this.getDailyMarkersFromStorage();
    dailyRouteMarkers.push(mark);
    mark.toggleVisited();
    this.storage.set("dailyRoute", dailyRouteMarkers);
  }

  clearDailyRouteMarkers() {
    dailyRouteMarkers = [];
    this.getDailyMarkersFromStorage();
    for (let m of dailyRouteMarkers) {
      var mark = <CustomMarker> m;
      mark.toggleVisited();
    }
    dailyRouteMarkers = [];
    this.storage.set("dailyRoute", dailyRouteMarkers);
  }

  getDailyMarkersFromStorage() {
    this.storage.get("dailyRoute").then((val) => {
      dailyRouteMarkers = val;
    });
  }

  getDailyMarkers() {
    dailyRouteMarkers = [];
    this.getDailyMarkersFromStorage();
    return dailyRouteMarkers;
  }

  //All markers
  addMarker(mark: CustomMarker) {
    allMarkers.push(mark);
  }

  getallMarkers() {
    return allMarkers;
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
