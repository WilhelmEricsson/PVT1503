import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { AlertController } from "ionic-angular";
import { MyApp } from '../../app/app.component';
import { MyProvider } from "../../providers/my/my";
import { AchievementsProvider } from '../../providers/achievements/achievements';
import { Achievement } from "../../providers/Achievement";


/**
 * Generated class for the AchievmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var usersAchievements: Achievement[] = []; 

@IonicPage()
@Component({
  selector: 'page-achievment',
  templateUrl: 'achievment.html',
})
export class AchievmentPage {




  constructor(public MyProvider: MyProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public achievementsProvider: AchievementsProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievmentPage');
  }

  ionViewWillEnter() {
    usersAchievements = this.achievementsProvider.getUsersAchievements();
  }

  handleAchievementClick() {
    
  }
  

 
}
