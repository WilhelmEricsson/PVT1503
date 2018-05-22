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
import { LoginPage } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { EmailSignInPage } from '../pages/email-sign-in/email-sign-in';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { Facebook } from '@ionic-native/facebook';
import { AchievmentPage } from '../pages/achievment/achievment';
import { DailyRoutesPage } from '../pages/daily-routes/daily-routes';
import { Geolocation } from '@ionic-native/geolocation';
import { SignupPage } from "../pages/signup/signup";
import { InformationPage } from '../pages/information/information';


//Notifications
import { LocalNotifications } from '@ionic-native/local-notifications'

//SocialSharing
import { SocialSharing } from '@ionic-native/social-sharing'

//Component
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

//CustomForms
import { CustomFormsModule } from 'ng2-validation';

//Storage
import { Storage, IonicStorageModule } from "@ionic/storage";

//AuthProvider
import { AuthProvider } from "../providers/auth/auth";
//LightPostProvider
import { LightPostProvider } from "../providers/light-post/light-post";

//HttpClientModule
import { HttpClientModule } from "@angular/common/http";

//JWTOptions
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { MyProvider } from '../providers/my/my';

import { DailyRoutesProvider } from '../providers/daily-routes/daily-routes';
import { RulesPage } from '../pages/rules/rules';
import { InformationProvider } from '../providers/information/information';
import { InformationTabsComponent } from '../components/information-tabs/information-tabs';
import { SavedInformationPage } from '../pages/saved-information/saved-information';
import { MyProfileProvider } from '../providers/my-profile/my-profile';
import { AchievementsProvider } from '../providers/achievements/achievements';



//Whitelisted URL's for authentication header
export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get('jwt_token'),
    whitelistedDomains: ['localhost:8080']
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionViewPage,
    MapPage,
    LoginPage,
    CreateAccountPage,
    EmailSignInPage,
    MyProfilePage,
    AchievmentPage,
    DailyRoutesPage,
    ProgressBarComponent,
    SignupPage,
    RulesPage,
    SignupPage,
    InformationPage,
    InformationTabsComponent,
    SavedInformationPage
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
    LoginPage,
    LoginPage,
    CreateAccountPage,
    EmailSignInPage,
    EmailSignInPage,
    MyProfilePage,
    AchievmentPage,
    DailyRoutesPage,
    SignupPage,
    RulesPage,
    InformationPage,
    InformationTabsComponent,
    SavedInformationPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    Geolocation,
    PhonegapLocalNotification,
    AuthProvider,
    SocialSharing,
    LightPostProvider,
    MyProvider,
    DailyRoutesProvider,
    LightPostProvider,
    InformationProvider,
    MyProfileProvider,
    AchievementsProvider
  ]
})
export class AppModule { }
