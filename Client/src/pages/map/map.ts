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
        /*
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => { 
            console.log(position); 
          }, (error) => console.log(new Date(), error), {
            enableHighAccuracy: true, timeout: 10000, maximumAge: 3000
          });
        }*/
        this.geolocation.getCurrentPosition({maximumAge: 3000, timeout: 5000, enableHighAccuracy: true}).then((position) => {
          let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        
          //Röd pin som visar användarens position på kartan
          var myPositionMarker = new google.maps.Marker({
            map: this.map,
            position: latLng, 
            icon: 'assets/imgs/pins/redpin.png' 
          })
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
