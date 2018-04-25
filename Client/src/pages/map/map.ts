import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(59.3293, 18.0686);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.placePins();
  }

  placePins() {
    new google.maps.Marker({
      position: (new google.maps.LatLng(59.3293, 18.0686)), map: this.map, icon: "assets/imgs/pins/bluepin.png"
    })

    new google.maps.Marker({
      position: (new google.maps.LatLng(59.326599, 18.066159)), map: this.map, icon: "assets/imgs/pins/purplepin.png"
    })

    new google.maps.Marker({
      position: (new google.maps.LatLng(59.326730, 18.070922)), map: this.map, icon: "assets/imgs/pins/redpin.png"
    })
    
    new google.maps.Marker({
      position: (new google.maps.LatLng(59.329204, 18.065987)), map: this.map, icon: "assets/imgs/pins/greenpin.png"
    })
  }

}
