import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionViewPage } from '../pages/question-view/question-view';
import { MapPage } from '../pages/map/map';
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
import { ChooseGamePage } from "../pages/choose-game/choose-game";
import { SignupPage } from "../pages/signup/signup";


//Notifications
import { LocalNotifications } from '@ionic-native/local-notifications'

//Component
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

//CustomForms
import {CustomFormsModule} from 'ng2-validation';

//Storage
import {Storage, IonicStorageModule} from "@ionic/storage";

//AuthProvider
import { AuthProvider } from "../providers/auth/auth";

//HttpClientModule
import {HttpClientModule} from "@angular/common/http";

//JWTOptions
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';

//Whitelisted URL's for authentication header
export function jwtOptionsFactory(storage:Storage){
  return{
    tokenGetter: ()=>storage.get('jwt_token'),
    whitelistedDomains: ['localhost:8080']
  }
}


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
    ProgressBarComponent,
    ChooseGamePage,
    SignupPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
  IonicStorageModule.forRoot(),
  CustomFormsModule,
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
    ChooseGamePage,
    SignupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    Geolocation,
    AuthProvider,
  ]
})
export class AppModule {}
