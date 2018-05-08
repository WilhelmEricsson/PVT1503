import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionViewPage } from '../pages/question-view/question-view';
import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewGamePage } from '../pages/new-game/new-game';
import { LoginPage } from '../pages/login/login';
import { AddFriendsPage } from '../pages/add-friends/add-friends';
import { PlayFriendsPage } from '../pages/play-friends/play-friends';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { EmailSignInPage } from '../pages/email-sign-in/email-sign-in';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AchievmentPage} from '../pages/achievment/achievment';
import { DailyRoutesPage} from '../pages/daily-routes/daily-routes';
import { Geolocation } from '@ionic-native/geolocation';

import { LocalNotifications } from '@ionic-native/local-notifications'
import { PhonegapLocalNotification } from "@ionic-native/phonegap-local-notification";
import { Push, PushObject, PushOptions} from '@ionic-native/push'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionViewPage,
    MapPage,
    NewGamePage,
    LoginPage,
    AddFriendsPage,
    PlayFriendsPage,
    CreateAccountPage,
    EmailSignInPage,
    NotificationsPage,
    MyProfilePage,
    AchievmentPage,
    DailyRoutesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionViewPage,
    MapPage,
    NewGamePage,
    LoginPage,
    AddFriendsPage,
    PlayFriendsPage,
    CreateAccountPage,
    EmailSignInPage, 
    NotificationsPage,
    EmailSignInPage,
    MyProfilePage,
    AchievmentPage,
    DailyRoutesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    PhonegapLocalNotification,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    Geolocation
  ]
})
export class AppModule {}
