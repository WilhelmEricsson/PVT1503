import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Facebook } from '@ionic-native/facebook';
import {AuthProvider} from "../providers/auth/auth";
import {InformationPage} from '../pages/information/information'
import { DailyRoutesProvider } from '../providers/daily-routes/daily-routes';
import { CustomMarker } from '../providers/CustomMarker';
import { MyProvider } from "../providers/my/my";
import { RulesPage } from '../pages/rules/rules';
import { LightPostProvider } from '../providers/light-post/light-post';
import {InformationProvider} from "../providers/information/information";
import { InformationTabsComponent } from '../components/information-tabs/information-tabs';
import { Storage } from '@ionic/storage';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;


  constructor(private dailyRoutesProvider: DailyRoutesProvider, public MyProvider: MyProvider,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private localNotification: LocalNotifications, private fb: Facebook, private authProvider: AuthProvider, private alert: AlertController, private lightPostProvider: LightPostProvider, private informationProvider: InformationProvider, private storage: Storage) {
    this.initializeApp();
    if(this.platform.is('cordova')){
      this.platform.ready().then(() => {
        this.localNotification.on("click").subscribe(noti => {
          this.fb.getLoginStatus().then(res => {
            if (res.status === "connected") {
              this.nav.push(InformationPage);
            }
          })
        });
      });
   }

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Information view', component: InformationTabsComponent },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'My profile', component: MyProfilePage },
      { title: 'Rules', component: RulesPage },


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
    this.getLightposts();
    this.storage.get("dailyRoute").then((list) => {
      if (list!=null) {
        console.log("storage found")
        console.log(list);
      } else {
        console.log("storage not found, creating key")
        var temp: CustomMarker[] = [];
        this.storage.set("dailyRoute", temp);
      }
    });
  }

  logOut(){
    if(this.platform.is('cordova')){

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
    }else{
      this.authProvider.logout();
      this.nav.setRoot(LoginPage);
    }
  }

  //hämtar alla stolpar från servern
  getLightposts() {
    this.lightPostProvider.getLightPosts().subscribe(data => {
      for (let l of data) {
        var mark = new CustomMarker(l.id,l.location.geoLocationLat, l.location.geoLocationLang);
        this.dailyRoutesProvider.addMarker(mark);
      }
    });
  }

  simulateBluetooth() {
    var mark: CustomMarker = <CustomMarker> this.dailyRoutesProvider.chooseRandomMarker();
    if (mark != null) {
      this.informationProvider.currentLightPost = mark.id;
      this.dailyRoutesProvider.addDailyMarker(mark);
      this.MyProvider.tapEvent()
      if(this.platform.is('cordova')){
        this.localNotification.requestPermission();
        this.localNotification.hasPermission().then(res => {
          if (res) {
            this.localNotification.schedule({
              id: mark.id,
              title: "Lightpost connected",
              text: 'Click to get information',
            });
          }
        });
      } else {
        console.log("Cordova not available, notification skipped");
      }
      this.nav.push(InformationTabsComponent);
    } else {
      let alert = this.alert.create({
        title: "All lightposts visited",
        buttons: ['Dismiss']
        });
        alert.present();
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



}
