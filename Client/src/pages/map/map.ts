import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';
import { QuestionViewPage } from '../question-view/question-view';
import { BehaviorSubject, Observable, Subscription } from 'rxjs'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

    loadMap() {
        this.geolocation.getCurrentPosition().then((position) => {
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

           // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    /*var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    function onSuccess(position) {
      var element = document.getElementById('geolocation');
      element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                          'Longitude: ' + position.coords.longitude     + '<br />' +
                          '<hr />'      + element.innerHTML;
  }

  // onError Callback receives a PositionError object
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }

  // Options: throw an error if no update is received every 30 seconds.
  //
 
         /*navigator.geolocation.watchPosition(watchSuccess);
          function watchSuccess(position){
            myPositionMarker.setPosition(latLng);
          }

         /* let watch = this.geolocation.watchPosition();
          watch.subscribe((data) => {
         // data can be a set of coordinates, or an error (if an error occurred).
           data.coords.latitude
           data.coords.longitude
           });*/

      },(err) => {
        console.log(err);
      });
    }

  Test(){
    this.navCtrl.push(QuestionViewPage);
  }

  placePins() {
    //Blå pin som heter marker?. Visas på kartan baserad på kordinaterna vart den ska ligga
    var marker1 = new google.maps.Marker({
      position: (new google.maps.LatLng(59.3293, 18.0686)), map: this.map, icon: "assets/imgs/lyktstolpar/turkos.png"
    })

    var info = new google.maps.InfoWindow({
      content: document.getElementById("infoStolpe1")
    });
    
    marker1.addListener('click', function() {
       info.open(Map, marker1);
    });
    
  

    //Lila/Purple pin som heter purplePin. Visas på kartan baserad på kordinaterna vart den ska ligga
    var marker2 = new google.maps.Marker({
      position: (new google.maps.LatLng(59.326730, 18.070922)), map: this.map, icon: "assets/imgs/lyktstolpar/lila.png"
    })

    info = new google.maps.InfoWindow({
      content: document.getElementById("infoStolpe1")
    });
    
    marker2.addListener('click', function() {
       info.open(Map, marker2);
    });
  }


}
