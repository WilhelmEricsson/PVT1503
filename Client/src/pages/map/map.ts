import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


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
       
        

        this.geolocaitionPin();
        this.placePins();
    },(err) => {
      console.log(err);
    });
  }

geolocaitionPin(){
  var myMarker = null;
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position){
    myMarker = new google.maps.Marker(
      { position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: new google.maps.Map(document.getElementById("map")),
        icon: 'assets/imgs/pins/purplepin.png'}
    );
  }
    navigator.geolocation.watchPosition(watchSuccess);

// change marker location everytime position is updated
function watchSuccess(position) {
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    // set marker position
    myMarker.setPosition(latLng);
    
}
}
  placePins() {
    var marker = new google.maps.Marker({
      position: (new google.maps.LatLng(59.3293, 18.0686)), map: this.map, icon: "assets/imgs/pins/bluepin.png"
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
    
  

    //Lila/Purple pin som heter purplePin. Visas på kartan baserad på kordinaterna vart den ska ligga
    var purplePin= new google.maps.Marker({
      position: (new google.maps.LatLng(59.326599, 18.066159)), map: this.map, icon: "assets/imgs/pins/purplepin.png"
    })

    //Röd pin som heter redPin
    var redPin= new google.maps.Marker({
      position: (new google.maps.LatLng(59.326730, 18.070922)), map: this.map, icon: "assets/imgs/pins/redpin.png"
    })

    //Grön pin som heter purplePin. Visas på kartan baserad på kordinaterna vart den ska ligga
    var greenPin= new google.maps.Marker({
      position: (new google.maps.LatLng(59.329204, 18.065987)), map: this.map, icon: "assets/imgs/pins/greenpin.png"
    })
  }

}
