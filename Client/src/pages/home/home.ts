import { Component, state} from '@angular/core';
import { NavController, AlertController, Platform, Alert} from 'ionic-angular';
import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';
import {AchievmentPage} from '../achievment/achievment';
import {DailyRoutesPage}from '../daily-routes/daily-routes';

import {JwtHelperService} from "@auth0/angular-jwt";
import {SERVER_URL} from "../../config";
import {AuthProvider} from "../../providers/auth/auth";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  connected: boolean = true;

  /**test */
  user: string;
  message: string;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform,
    private readonly authProvider: AuthProvider,
    jwtHelper: JwtHelperService,
    private readonly httpClient: HttpClient) {
      /**test */
      this.authProvider.authUser.subscribe(jwt => {
        if (jwt) {
          const decoded = jwtHelper.decodeToken(jwt);
          this.user = decoded.sub
        }
        else {
          this.user = null;
        }
      });
      /**test */

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

/**test */
  ionViewWillEnter() {
    this.httpClient.get(`${SERVER_URL}/secret`, {responseType: 'text'}).subscribe(
      text => this.message = text,
      err => console.log(err)
    );
  }

  logout() {
    this.authProvider.logout();
  }
  /**test */

}