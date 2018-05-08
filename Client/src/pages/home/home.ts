import { Component, state } from '@angular/core';
import { NavController, AlertController, Platform, Alert} from 'ionic-angular';
import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';
import {AchievmentPage} from '../achievment/achievment';
import {DailyRoutesPage}from '../daily-routes/daily-routes';

import { LocalNotifications } from '@ionic-native/local-notifications'
import { PhonegapLocalNotification } from "@ionic-native/phonegap-local-notification";
import { Push, PushObject, PushOptions} from '@ionic-native/push'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform, private localNotification: LocalNotifications, private notiPhoneGap: PhonegapLocalNotification) {
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
  showNotification(){
    var testNot = new Notification("My title", {
      tag: 'message1',
      body: "My body"
    });
    testNot.onclick = function(){
      console.log('test');
    };

   /* this.localNotification.schedule({
      id: 1,
      title: "Test",
      text: 'Test1',
      trigger: {at: new Date(new Date().getTime() + 3000)},
      data: { mydata: 'Test3'}
    });*/
  }

}