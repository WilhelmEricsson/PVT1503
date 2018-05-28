import { Component} from '@angular/core';
import { NavController, AlertController, Platform, ModalController} from 'ionic-angular';
import { MapPage } from '../map/map';
import { AchievmentPage } from '../achievment/achievment';
import { DailyRoutesPage } from '../daily-routes/daily-routes';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthProvider } from "../../providers/auth/auth";
import { HttpClient } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing";
import {WeatherForecastPage} from "../weather-forecast/weather-forecast";
import {WeatherComponent} from "../../components/weather/weather";
import {WeatherForecastProvider} from "../../providers/weather-forecast/weather-forecast";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentWeather: WeatherComponent;
  connected: boolean = true;


  user: string;
  message: string;

  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform,
    private readonly authProvider: AuthProvider,
    jwtHelper: JwtHelperService,
    private  httpClient: HttpClient, private modalController :ModalController, private weatherForecastProvider:WeatherForecastProvider) {

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


  ionViewDidEnter(){
    this.getCurrentWeather();

  }

  presentWeatherForecast(){
    const weatherForecastModal = this.modalController.create("WeatherForecastPage");
    weatherForecastModal.present();


  }


  getCurrentWeather() {
    this.weatherForecastProvider.fetchForecastFromSource().subscribe(data=> {
        let weather: any = data;
        for (var i = 0  ; i < 5; i++) {
          this.weatherForecastProvider.addItemToForecast(weather.timeSeries[i+1]);
        }
        this.currentWeather = this.weatherForecastProvider.getCurrentWeather();
        this.setWeatherDisplay();
      })
  }
  private setWeatherDisplay(){
    let temp = document.getElementById("temperature") as HTMLFontElement;
    let desc = document.getElementById("weatherDescription") as HTMLFontElement;
    let img = document.getElementById("weatherImg") as HTMLImageElement;
    temp.textContent  = "" + this.currentWeather.temperature;
    desc.textContent = this.currentWeather.weatherDescription;
    img.src = this.currentWeather.weatherImageSrc;
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

  


}
