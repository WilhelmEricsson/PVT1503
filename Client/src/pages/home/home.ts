import { Component, state } from '@angular/core';
import { NavController, AlertController, Platform, Alert } from 'ionic-angular';
import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';
import { AchievmentPage } from '../achievment/achievment';
import { DailyRoutesPage } from '../daily-routes/daily-routes';

import { JwtHelperService } from "@auth0/angular-jwt";
import { SERVER_URL } from "../../config";
import { AuthProvider } from "../../providers/auth/auth";
import { HttpClient } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  connected: boolean = true;

  /**test */
  user: string;
  message: string;

  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform,
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

  AchievmentController() {
    this.navCtrl.push(AchievmentPage)
  }

  DailyRoutesController() {
    this.navCtrl.push(DailyRoutesPage)
  }

  NewGameController() {
    this.navCtrl.push(NewGamePage)
  }

  MapController() {
    this.navCtrl.push(MapPage);
  }

  ShareController() {
    this.socialSharing.share("test2", null, "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg", null);
  }
  /**test */
  ionViewWillEnter() {
    this.httpClient.get(`${SERVER_URL}/secret`, { responseType: 'text' }).subscribe(
      text => this.message = text,
      err => console.log(err)
    );
  }

  logout() {
    this.authProvider.logout();
  }
  /**test */

}