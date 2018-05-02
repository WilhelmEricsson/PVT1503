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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
