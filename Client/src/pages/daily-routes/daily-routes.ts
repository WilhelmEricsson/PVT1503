import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailyRoutesProvider } from '../../providers/daily-routes/daily-routes';
import { CustomMarker } from '../../providers/CustomMarker';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private dailyRoutesProvider: DailyRoutesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyRoutesPage');
    this.loadMap();
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
    var list = this.dailyRoutesProvider.getDailylMarkers();
    var pathList: any[] = [];
    var currentLatLng;
    var counter = 0;
    for (let m of list) {
      var mark = <CustomMarker> m;
      currentLatLng = new google.maps.LatLng(mark.getLat(), mark.getLng());
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
      pathList.push(currentLatLng);
      counter++;
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
    this.loadMap();
  }

  shareMarkers() {

  }

}
