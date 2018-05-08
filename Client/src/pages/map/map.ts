import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';
import { QuestionViewPage } from '../question-view/question-view';

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
          
          
          this.placePins();
      },(err) => {
        console.log(err);
      });
    }

  Test(){
    this.navCtrl.push(QuestionViewPage);

  }
  

  placePins() {
    //Blå pin som heter marker?. Visas på kartan baserad på kordinaterna vart den ska ligga
    var marker = new google.maps.Marker({
      position: (new google.maps.LatLng(59.3293, 18.0686)), map: this.map, icon: "assets/imgs/lyktstolpar/turkos.png"
    })
    
    
    marker.addListener('click', function() {
        var pathBetween = new google.maps.Polyline({
        path: [(new google.maps.LatLng(59.327637, 18.068339)), (new google.maps.LatLng(59.3293, 18.0686))],

       strokeColor: '#FF0000',
       strokeOpacity: 1.0,
       strokeWeight: 2 
      });



      pathBetween.setMap(this.map);
    });
    
<<<<<<< HEAD
=======
  
>>>>>>> e3d1c0962e31767ae584dcb660730167de7cb486

    //Lila/Purple pin som heter purplePin. Visas på kartan baserad på kordinaterna vart den ska ligga
    var purplePin= new google.maps.Marker({
      position: (new google.maps.LatLng(59.326730, 18.070922)), map: this.map, icon: "assets/imgs/lyktstolpar/lila.png"
    })
  }

}
