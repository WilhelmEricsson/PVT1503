import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
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
import { AchievementsProvider } from '../providers/achievements/achievements';
import { Achievement } from '../providers/Achievement';
import { Coupon } from '../providers/Coupon';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isConnectedToBluetooth:boolean;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any }>;

  constructor(private dailyRoutesProvider: DailyRoutesProvider, public MyProvider: MyProvider,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private localNotification: LocalNotifications, private fb: Facebook, private authProvider: AuthProvider, private alert: AlertController, private lightPostProvider: LightPostProvider, private informationProvider: InformationProvider, private storage: Storage, private achievementsProvider: AchievementsProvider) {

    this.initializeApp();
    if(this.platform.is('cordova')){
      this.platform.ready().then(() => {
        this.localNotification.on("click").subscribe(noti => {
          this.fb.getLoginStatus().then(res => {
            if (res.status === "connected") {
              this.nav.push(InformationPage);
            }
          })
          //*kolla ifall användaren loggat in med vanlig inlogg också*
        });
      });

   }

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Information view', component: InformationTabsComponent },
      { title: 'My profile', component: MyProfilePage },
      { title: 'About', component: RulesPage },


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
    this.isConnectedToBluetooth = false;
    this.getLightposts();
    this.getLocalStorageDailyRoute();
    this.getLocalStorageAchievements();
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

  getLocalStorageDailyRoute() {
    this.storage.get("dailyRoute").then((list) => {
      if (list!=null) {
        console.log(list);
        console.log("^'Daily Route'-storage found")
        this.dailyRoutesProvider.setCurrentLocalStorage(list);
      } else {
        console.log("'Daily Route'-storage not found, creating key")
        var temp: CustomMarker[] = [];
        this.storage.set("dailyRoute", temp);
        this.dailyRoutesProvider.setCurrentLocalStorage(temp);
      }
    });
  }

  getLocalStorageAchievements() {
    this.storage.get("achievements").then((list) => {
      if (list!=null) {
        console.log(list);
        console.log("^'Achievement'-storage found")
        this.achievementsProvider.setUsersAchievements(list);
      } else {
        console.log("'Achievement'-storage not found, creating key")
        var temp: Achievement[] = [];
        temp.push(new Achievement(new Coupon(this.achievementsProvider.randomizeCouponCode())));
        this.achievementsProvider.setUsersAchievements(temp);
        this.storage.set("achievements", temp);
      }
    });
  }

  //hämtar alla stolpar från servern
  getLightposts() {
    this.lightPostProvider.getLightPosts().subscribe(data => {
      for (let l of data) {
        var mark = new CustomMarker(l.id,l.location.geoLocationLat, l.location.geoLocationLang, l.numOfUsersPresent);
        this.dailyRoutesProvider.addMarker(mark);
      }
      if (this.dailyRoutesProvider.getExampleDailyRoute().length == 0) {
        this.dailyRoutesProvider.populateExampleDailyRoute();
      }
    });
  }

  simulateBluetooth() {
    if(!this.isConnectedToBluetooth){
      this.isConnectedToBluetooth = true;
      var mark: CustomMarker = <CustomMarker> this.dailyRoutesProvider.chooseRandomMarker();
      //var mark: CustomMarker = <CustomMarker> this.dailyRoutesProvider.getNextMarker()
      if (mark != null) {
        this.lightPostProvider.increaseNumOfUsersPresent(mark.id);
        this.informationProvider.setCurrentLightPost(mark.id);
        this.dailyRoutesProvider.addDailyMarker(mark);
        this.achievementsProvider.handleAchievement();
        //this.MyProvider.tapEvent()
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
          this.nav.push(InformationTabsComponent);
        }
      } else {
        let alert = this.alert.create({
          title: "All lightposts visited",
          buttons: ['Dismiss']
        });
        alert.present();
      }
    }else{
      this.decreaseNumOfUsersPresent();
    }

  }

  private decreaseNumOfUsersPresent(){
    this.lightPostProvider.decreaseNumOfUsersPresent(this.informationProvider.currentLightPost);
    //this.informationProvider.setCurrentLightPost(-1);
    this.isConnectedToBluetooth = false;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }




}
