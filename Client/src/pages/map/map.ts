import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ChooseGamePage } from '../choose-game/choose-game';
import { DailyRoutesProvider } from '../../providers/daily-routes/daily-routes';
import { CustomFormsModule } from 'ng2-validation';
import { CustomMarker } from '../../providers/CustomMarker';
import {LightPostProvider} from "../../providers/light-post/light-post";
import {JsonContainer} from "postcss";
import {Jsonp} from "@angular/http";




/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

var currentMarker;
let gpsEnabled: boolean = false;
var gpsEvent;


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public geolocation: Geolocation, private alert: AlertController,
              private lightPostProvider: LightPostProvider, private dailyRoutesProvider: DailyRoutesProvider) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap() {
    //https://stackoverflow.com/questions/14586916/google-maps-directions-from-users-geo-location Bra att kolla igenom
    if (navigator.geolocation) {
      var mapOptions;
      this.geolocation.getCurrentPosition({}).then((position) => {
        mapOptions = {
          center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
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

  toggleGPS() {
    if (gpsEnabled) {
      currentMarker.setMap(null);
      gpsEvent.unsubscribe();
      gpsEnabled = false;
    } else {
      gpsEvent = this.geolocation.watchPosition({enableHighAccuracy: true}).subscribe((position => {
        if (currentMarker != null) {
            currentMarker.setMap(null);
        }
        var userPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude)
        currentMarker = new google.maps.Marker({
          map: this.map,
          position: userPosition
        })
        this.map.panTo(userPosition);
      }));
      gpsEnabled = true;
    }
  }

  ChooseGameController(){
    this.navCtrl.push(ChooseGamePage);
  }

    myRandom: number;

    ionViewDidEnter() {
       this.myRandom=this.randomNumber();
      }

     randomNumber(): number {
       let randomNumber = Math.floor(Math.random()*4000) +1;
       return randomNumber;
     }


  placePins() {
    var list = this.dailyRoutesProvider.getallMarkers();
    for (let m of list) {
      var mark = <CustomMarker> m;
      var lightpost = new google.maps.Marker({
        position: (new google.maps.LatLng(mark.getLat(),mark.getLng())), map: this.map, icon: "assets/imgs/lyktstolpar/lila2.png"
      });
    }
  }

/*
  placePins() {
    var marker1 = new google.maps.Marker({
      position: (new google.maps.LatLng(59.3293, 18.0686)), map: this.map, icon: "assets/imgs/lyktstolpar/lila2.png"
    });

    var info = new google.maps.InfoWindow({
      content: document.getElementById("infoStolpe1")
    });

    marker1.addListener('click', function() {
      info.open(Map, marker1);
    });

    var mark = new CustomMarker(marker1.getPosition().lat(), marker1.getPosition().lng());
    this.dailyRoutesProvider.addMarker(mark);
  }
  */




}



