import { Component, state } from '@angular/core';
import { NavController, AlertController, Platform, Alert} from 'ionic-angular';


import { MapPage } from '../map/map';
import { NewGamePage } from '../new-game/new-game';
import { AchievmentPage } from '../achievment/achievment';
import { DailyRoutesPage } from '../daily-routes/daily-routes';

import { JwtHelperService } from "@auth0/angular-jwt";
import { SERVER_URL } from "../../config";
import { AuthProvider } from "../../providers/auth/auth";
import { HttpClient } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing";

import { LocalNotifications } from '@ionic-native/local-notifications'
import { PhonegapLocalNotification } from "@ionic-native/phonegap-local-notification";
import { Push, PushObject, PushOptions} from '@ionic-native/push'


import { Observable } from "rxjs/Observable";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

      result: any = [];
      data: Observable<any>;

  user: string;
  message: string;

  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform,
    private readonly authProvider: AuthProvider,
    jwtHelper: JwtHelperService,
    private  httpClient: HttpClient) {
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
  }
 
  
  getData(){
    var url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.178/lat/59.211/data.json`;  
    this.data = this.httpClient.get(url);
    this.data.subscribe(data=>{
      this.result = JSON.stringify(data.timeSeries[0].parameters[11].values[0], null, 2);
        })
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
  showNotification(){
    var testNot = new Notification("My title", {
      tag: 'message1',
      body: "My body"
    });
    testNot.onclick = function(){
      console.log('test');
    };
  }

   /* this.localNotification.schedule({
      id: 1,
      title: "Test",
      text: 'Test1',
      trigger: {at: new Date(new Date().getTime() + 3000)},
      data: { mydata: 'Test3'}
    });*/
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
