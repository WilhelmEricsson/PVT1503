import { Component} from '@angular/core';
import { NavController, AlertController, Platform, ModalController} from 'ionic-angular';
import { MapPage } from '../map/map';
import { AchievmentPage } from '../achievment/achievment';
import { DailyRoutesPage } from '../daily-routes/daily-routes';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthProvider } from "../../providers/auth/auth";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { SocialSharing } from "@ionic-native/social-sharing";
import { DailyRoutesProvider } from '../../providers/daily-routes/daily-routes';
import {WeatherForecastPage} from "../weather-forecast/weather-forecast";







@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*
    weatherIconArray nummerförklaring
    1 = Sol bild, 2 = sol och moln, 3 = moln bild, 4 = Regn bild, 5 = åska bild,6 = snö bild
   */
  weatherIconArray: number[] = [1,1,2,2,3,3,3,4,4,4,5,6,6,6,6,6,6,4,4,4,5,6,6,6,6,6,6];
  weatherDescription: string[] = ["Clear sky","Nearly clear sky", "Variable cloudiness","Halfclear sky", "Cloudy sky","Overcast","Fog", "Light rain showers", "Moderate rain showers", "Heavy rain showers",
                                  "Thunderstorm", "Light sleet showers", "Moderate sleet showers", "Heavy sleet showers", "Light snow showers", "Moderate snow showers", "Heavy snow showers", "Light rain",
                                  "Moderate rain", "Heavy rain", "Thunder", "Light sleet", "Moderate sleet", "Heavy sleet", "Light snowfall", "Moderate snowfall", "Heavy snowfall"];
  rainResult: any = [];
  temperature: any = [];
  weatherSymbol: any = [];
  data: Observable<any>;

  connected: boolean = true;


  user: string;
  message: string;

  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform,
    private readonly authProvider: AuthProvider,
    jwtHelper: JwtHelperService,
    private  httpClient: HttpClient, private modalController :ModalController) {

    this.authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = jwtHelper.decodeToken(jwt);
        this.user = decoded.sub
      }
      else {
        this.user = null;
      }
    });
  }

  ionViewDidLoad() {
    this.getWeather();
  }

  presentWeatherForecast(){
    const weatherForecastModal = this.modalController.create("WeatherForecastPage");
    weatherForecastModal.present();

    console.log("TEST Weather Forecasts!");
  }

  getWeather() {
    var url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.178/lat/59.211/data.json';
    this.data = this.httpClient.get(url);
    this.data.subscribe(data=> {
      this.temperature = JSON.stringify(data.timeSeries[1].parameters[11].values[0],null, 2);
      this.weatherSymbol = JSON.stringify(data.timeSeries[1].parameters[18].values[0],null, 2);
      this.rainResult = this.weatherDescription[this.weatherSymbol-1];
      var iconImage = document.getElementById("weatherImg") as HTMLImageElement;
          iconImage.src="assets/imgs/weather/weather" + this.weatherIconArray[this.weatherSymbol-1] + ".png";

    })
  }

  riskForRain(){
    this.data.subscribe(data=> {
      var rain = 0;
      var rainArray = [];
      for (var i =0 ; i<5 ; i++) {
        rainArray [i] = JSON.stringify(data.timeSeries[i+1].parameters[2].values[0],null, 2);
        if (rainArray [i] != "0") {
          rain = 1;
        }
      }

       if (rain==1) {
         this.rainResult = 'Risk for rain';
       } else this.rainResult = 'Clear skies';
    })
  }




  AchievmentController() {
    this.navCtrl.push(AchievmentPage)
  }

  DailyRoutesController() {
    this.navCtrl.push(DailyRoutesPage)
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


}
