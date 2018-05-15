import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomMarker } from '../CustomMarker';

/*
  Generated class for the DailyRouteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var google; 
var markers: any[] = [];

@Injectable()
export class DailyRoutesProvider {

  map: any;
  mapOptions: any;
  test: string;
  
   

  constructor(public http: HttpClient) {

  }

  addToMarkers(mark: CustomMarker) {
    markers.push(mark);
  }

  getMarkers() {
    return markers;
  }

}
