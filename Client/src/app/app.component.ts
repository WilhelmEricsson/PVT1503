import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ChooseGamePage } from '../pages/choose-game/choose-game';
import { Facebook } from '@ionic-native/facebook';
import {AuthProvider} from "../providers/auth/auth";
import {InformationPage} from '../pages/information/information'
import { DailyRoutesProvider } from '../providers/daily-routes/daily-routes';
import { CustomMarker } from '../providers/CustomMarker';
import { MyProvider } from "../providers/my/my";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  
  constructor(private dailyRoutesProvider: DailyRoutesProvider, public MyProvider: MyProvider,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private localNotification: LocalNotifications, private fb: Facebook, private authProvider: AuthProvider, private alert: AlertController) {
    this.initializeApp();
    this.platform.ready().then(() => {
      this.localNotification.on("click").subscribe(noti => {
        this.fb.getLoginStatus().then(res => {
          if (res.status === "connected") {
            this.nav.push(ChooseGamePage);
          }
        })
      });
    });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Information view', component: InformationPage },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'My profile', component: MyProfilePage },
    ];

    //Subscribe to authentication token
    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        this.rootPage = HomePage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });

    authProvider.checkLogin();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut(){
    this.fb.getLoginStatus().then( data=>{
      if(data.status =='connected'){
        this.fb.logout()
        this.nav.setRoot(LoginPage);
      }
      else{
          this.authProvider.logout();
          this.nav.setRoot(LoginPage);
      }
    });
  }

  simulateBluetooth() {
    var mark = <CustomMarker> this.dailyRoutesProvider.chooseRandomMarker();
    if (!mark.visited) {
      this.dailyRoutesProvider.addDailyMarker(mark);
      this.MyProvider.tapEvent()
      this.localNotification.requestPermission();
      this.localNotification.hasPermission().then(res => {
        console.log(res);
        if (res) {
          this.localNotification.schedule({
            id: 1,
            title: "Test",
            text: 'Test1',
          });
        } else {
          let alert = this.alert.create({
            title: "Notifications not allowed",
            buttons: ['Dismiss']
            });
            alert.present();
        }
      })
    } else {
      console.log("test");
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
 
}
