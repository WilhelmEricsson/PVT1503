import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';
import {AchievmentPage} from '../achievment/achievment';
import {DailyRoutesPage}from '../daily-routes/daily-routes';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
    
  }
  AchievmentController(){
    this.navCtrl.push(AchievmentPage)
  }

  DailyRoutesController(){
    this.navCtrl.push(DailyRoutesPage)
  }

  NewGameController() {
    this.navCtrl.push(NewGamePage)
  }

  MapController() {
    this.navCtrl.push(MapPage);
  }

}
