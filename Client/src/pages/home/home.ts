import { Component, state} from '@angular/core';
import { NavController, AlertController, Platform, Alert} from 'ionic-angular';
import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';
import {AchievmentPage} from '../achievment/achievment';
import {DailyRoutesPage}from '../daily-routes/daily-routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  connected: boolean = true;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform) {
 /*   this.platform.ready().then((ready) => {
      this.localNotification.on('click', (notification, state) => {
       let json = JSON.parse(notification.data);
       let alert = this.alertCtrl.create({
         title: notification.title,
         subTitle: json.mydata
       });
       alert.present();
      });
    });
    */

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

  lightpostController() {
    console.log("not disabled");
  }

}