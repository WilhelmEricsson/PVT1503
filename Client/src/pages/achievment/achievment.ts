import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { AlertController } from "ionic-angular";
import { MyApp } from '../../app/app.component';
import { MyProvider } from "../../providers/my/my";

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




  constructor(public MyProvider: MyProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.MyProvider.tapEvent()
    console.log('ionViewDidLoad AchievmentPage');
  }
  

 
}
