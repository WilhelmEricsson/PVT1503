import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { AlertController } from "ionic-angular";

/**
 * Generated class for the AchievmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-achievment',
  templateUrl: 'achievment.html',
})
export class AchievmentPage {

  public tap: number = 0;


  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievmentPage');
  }
  tapEvent(e) {
    this.tap++

    if(this.tap == 10){
      if(this.tap ==10){
        this.tap =0;
      
      let alert = this.alertCtrl.create({
        title: 'Coupon!',
        subTitle: 'You got a coupon at Kungafamiljen. Show this code to the guard: X4SDF',
        buttons: ['OK']
        
        
      
      });
      alert.present();
    }
    }
  }
 
}
