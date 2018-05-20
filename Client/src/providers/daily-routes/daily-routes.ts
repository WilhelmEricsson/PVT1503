import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomMarker } from '../CustomMarker';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the DailyRouteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var allMarkers: any[] = [];

@Injectable()
export class DailyRoutesProvider {
  
  constructor(public http: HttpClient, private storage: Storage, private alert: AlertController) {
  }

  addDailyMarker(mark: CustomMarker) {
    mark.toggleVisited();
    this.storage.get("dailyRoute").then((list) => {
      list.push(mark);
      this.storage.set("dailyRoute", list);
    });
  }

  clearDailyRouteMarkers() {
    this.storage.get("dailyRoute").then((list) => {
      list = [];
      this.storage.set("dailyRoute", list);
    });
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
      rnd = Math.floor(Math.random() * allMarkers.length);
      var temp = <CustomMarker> allMarkers[rnd];
      if (!temp.visited) {
        return temp;
      } 
    }
  }
}
