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
var allMarkers: CustomMarker[] = [];
var currentLocalStorage: CustomMarker[] = [];

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
    currentLocalStorage.push(mark);
  }

  clearDailyRouteMarkers() {
    this.storage.get("dailyRoute").then((list) => {
      list = [];
      this.storage.set("dailyRoute", list);
    });
    for (let m of currentLocalStorage) {
      if (m instanceof CustomMarker) {
        console.log(m.id + " cleared")
        var mark = m as CustomMarker;
        mark.toggleVisited();
      }
    }
    currentLocalStorage = [];
  }

  setCurrentLocalStorage(list) {
    currentLocalStorage = list;
  }

  getCurrentStorage() {
    return currentLocalStorage;
  }

  //All markers
  addMarker(mark: CustomMarker) {
    allMarkers.push(mark);
  }

  getallMarkers() {
    return allMarkers;
  }

  chooseRandomMarker() {
    let allTested: number[] = [];
    let rnd: number;
    do {
      rnd = Math.floor(Math.random() * allMarkers.length);
      var alreadyTested = false;
      for (let n of allTested) {
        if (n==rnd) {
          alreadyTested = true;
        }
      }
      if (!alreadyTested) {
        var temp = <CustomMarker> allMarkers[rnd];
        if (!temp.visited) {
          return temp;
        } 
      }
      allTested.push(rnd);
    } while (allTested.length <= allMarkers.length)
  }
}
