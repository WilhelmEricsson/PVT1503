import { Component } from '@angular/core';
import { NavController, Alert, AlertController} from 'ionic-angular';
import { MapPage } from '../map/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
    
  }

  LampController() {
    //Start nytt spel vyn
  }

  MapController() {
    this.navCtrl.push(MapPage);
  }

}
