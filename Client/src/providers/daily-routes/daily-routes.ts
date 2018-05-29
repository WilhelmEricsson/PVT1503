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
var exampleDailyRoute: CustomMarker[] = [];
var currentLocalStorage: CustomMarker[] = [];
var tested: number[];

@Injectable()
export class DailyRoutesProvider {
  
  constructor(public http: HttpClient, private storage: Storage, private alert: AlertController) {
  }

  addDailyMarker(mark: CustomMarker) {
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
    currentLocalStorage = [];
  }

  setCurrentLocalStorage(list) {
    currentLocalStorage = list;
  }

  getCurrentStorage() {
    return currentLocalStorage;
  }

  addMarker(mark: CustomMarker) {
    allMarkers.push(mark);
  }

  getallMarkers() {
    return allMarkers;
  }

  markerAlreadyVisited(mark: CustomMarker) : boolean {
    if (currentLocalStorage.length == 0) {
      return false;
    }
    for (let m of currentLocalStorage) {
      if (m.id == mark.id) {
        return true;
      }
    }
    return false;
  }

  idAlreadyTested(id: number) : boolean {
    if (tested.length == 0) {
      return false;
    }
    for (let n of tested) {
      if (n==id) {
        return true;
      }
    }
    return false;
  }

  chooseRandomMarker() {
    tested = [];
    var alreadyTested: boolean;
    let rnd: number;
    do {
      rnd = Math.floor(Math.random() * allMarkers.length);
      alreadyTested = this.idAlreadyTested(rnd);
      if (!alreadyTested) {
        var temp = <CustomMarker> allMarkers[rnd];
        if (!this.markerAlreadyVisited(temp)) {
          return temp;
        } 
        tested.push(rnd);
      }
    } while (tested.length != allMarkers.length)
    return null;
  }

  populateExampleDailyRoute() {
    var temp: CustomMarker;
    
    temp = <CustomMarker> allMarkers[9];
    exampleDailyRoute.push(temp);

    temp = <CustomMarker> allMarkers[1];
    exampleDailyRoute.push(temp);

    temp = <CustomMarker> allMarkers[8];
    exampleDailyRoute.push(temp);

    temp = <CustomMarker> allMarkers[6];
    exampleDailyRoute.push(temp);

    temp = <CustomMarker> allMarkers[5];
    exampleDailyRoute.push(temp);
  }

  getExampleDailyRoute() {
    return exampleDailyRoute;
  }

  getNextMarker() {
    return exampleDailyRoute.pop()
  }
}
