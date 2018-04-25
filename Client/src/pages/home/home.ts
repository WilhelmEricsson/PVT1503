import { Component } from '@angular/core';
import { NavController, Alert, AlertController} from 'ionic-angular';
import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
    
  }

  NewGameController() {
    this.navCtrl.push(NewGamePage)
  }

  MapController() {
    this.navCtrl.push(MapPage);
  }

}
