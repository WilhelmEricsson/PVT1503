import { Component, ViewChild} from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { QuestionViewPage } from '../pages/question-view/question-view';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ChooseGamePage } from '../pages/choose-game/choose-game';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private localNotification: LocalNotifications) {
    this.initializeApp();
    this.platform.ready().then(() => {
      this.localNotification.on("click").subscribe(noti =>{
        this.nav.push(ChooseGamePage);
      });
    }); 
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Question View', component: QuestionViewPage },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'My profile', component: MyProfilePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    this.nav.setRoot(LoginPage);
  }

  simulateBluetooth() {
    this.localNotification.schedule({
      id: 1,
      title: "Test",
      text: 'Test1',
      trigger: {at: new Date(new Date().getTime() + 10000)},
      data: { mydata: 'Test3'}
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
