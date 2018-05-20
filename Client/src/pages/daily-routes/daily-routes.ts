import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DailyRoutesProvider } from '../../providers/daily-routes/daily-routes';
import { CustomMarker } from '../../providers/CustomMarker';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DailyRoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-daily-routes',
  templateUrl: 'daily-routes.html',
})
@Injectable()
export class DailyRoutesPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dailyRoutesProvider: DailyRoutesProvider, private alert: AlertController, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyRoutesPage');
  }

  ionViewWillEnter() {
    this.loadMap();
  }

  loadMap() {
    var mapOptions = {
      center: new google.maps.LatLng(59.3293,18.0686),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.loadMarkers();
  }

  loadMarkers() {
    var pathList: any[] = [];
    var currentLatLng;
    var counter = 0;
    this.storage.get("dailyRoute").then((val) => {
      for (let m of val) {
        var mark = <CustomMarker> m;
        currentLatLng = new google.maps.LatLng(mark.lat, mark.lng);
        if (counter == 0) {
          new google.maps.Marker({
            position: currentLatLng,
            map: this.map,
            icon: "assets/imgs/lyktstolpar/lykstolpestart.png"
          });
        } else if (counter == val.length - 1) {
          new google.maps.Marker({
            position: currentLatLng,
            map: this.map,
            icon: "assets/imgs/lyktstolpar/lyktstolpefinish.png"
          });
        } else {
          new google.maps.Marker({
            position: currentLatLng,
            map: this.map,
            icon: "assets/imgs/lyktstolpar/lila2.png"
          });
        }
        pathList.push(currentLatLng);
        counter++;
      }
      console.log(pathList)
    });
    var path = new google.maps.Polyline({
      path: pathList,
      geodesic: true,
      strokeColor: '#0000FF',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    path.setMap(this.map);
    
  }  
  

  clearMarkers() {
    this.dailyRoutesProvider.clearDailyRouteMarkers();
    this.storage.get("dailyRoute").then((val) => {
      this.loadMap();
    });
  }

  shareMarkers() {
    
  }

}
