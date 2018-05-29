import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DailyRoutesProvider } from '../../providers/daily-routes/daily-routes';
import { CustomMarker } from '../../providers/CustomMarker';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  url: string = "https://www.google.com/maps/dir/";
  markersCoordinates: string = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, private dailyRoutesProvider: DailyRoutesProvider, private alert: AlertController, private storage: Storage, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyRoutesPage');
  }

  ionViewWillEnter() {
    this.loadMap();
    console.log(this.dailyRoutesProvider.getCurrentStorage())
    console.log("^Current local storage")
  }

  loadMap() {
    var mapOptions = {
      center: new google.maps.LatLng(59.3293,18.0686),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.loadMarkers();
  }

  loadMarkers() {
    var pathList: any[] = [];
    var currentLatLng;
    var counter = 0;
    this.storage.get("dailyRoute").then((list) => {
      for (let m of list) {
        var mark = m as CustomMarker;
        currentLatLng = new google.maps.LatLng(mark.lat, mark.lng);
        if (counter == 0) {
          new google.maps.Marker({
            position: currentLatLng,
            map: this.map,
            icon: "assets/imgs/lyktstolpar/lykstolpestart.png"
          });
        } else if (counter == list.length - 1) {
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
        this.markersCoordinates += mark.lat.toString() + "," +  mark.lng.toString() + "/";
        counter++;
      }
      this.url = this.url + this.markersCoordinates;
    });
    for (let m of this.dailyRoutesProvider.getCurrentStorage()) {
      var mark = m as CustomMarker;
      currentLatLng = new google.maps.LatLng(mark.lat, mark.lng);
      pathList.push(currentLatLng);
    }
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
    this.storage.get("dailyRoute").then((list) => {
      this.loadMap();
    });
  }

  shareMarkers() {
    console.log(this.url);
    this.socialSharing.share("","","",this.url);
  }

}
