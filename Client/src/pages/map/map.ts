import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';
import { QuestionViewPage } from '../question-view/question-view';
import { ChooseGamePage } from '../choose-game/choose-game';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
var currentMarker;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private alert: AlertController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

    loadMap() {
      //https://stackoverflow.com/questions/14586916/google-maps-directions-from-users-geo-location Bra att kolla igenom
      if (navigator.geolocation) {
        this.geolocation.getCurrentPosition({}).then((position) => {
          let mapOptions = {
            center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        
          this.geolocation.watchPosition({enableHighAccuracy: true}).subscribe((position => {
            if (currentMarker != null) {
                currentMarker.setMap(null);
            }
            var userPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude)
            currentMarker = new google.maps.Marker({
              map: this.map,
              position: userPosition, 
              icon: 'assets/imgs/pins/redpin.png' 
            })
            this.map.panTo(userPosition);
          }));
          this.placePins();
      },(err) => {
        let alert = this.alert.create({
          title: err.message,
          buttons: ['Dismiss']
          });
          alert.present();
        console.log(err);
      });
    } 
   
    }

  ChooseGameController(){
    this.navCtrl.push(ChooseGamePage);
  }

  placePins() {
    var marker1 = new google.maps.Marker({
      position: (new google.maps.LatLng(59.3293, 18.0686)), map: this.map, icon: "assets/imgs/lyktstolpar/lila2.png"
    })

    var info = new google.maps.InfoWindow({
      content: document.getElementById("infoStolpe1")
    });
    
    marker1.addListener('click', function() {
       info.open(Map, marker1);
    });
  }


}
