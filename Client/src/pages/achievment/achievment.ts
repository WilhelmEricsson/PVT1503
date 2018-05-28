import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { AlertController } from "ionic-angular";
import { MyApp } from '../../app/app.component';
import { MyProvider } from "../../providers/my/my";
import { AchievementsProvider } from '../../providers/achievements/achievements';
import { Achievement } from "../../providers/Achievement";
import { Coupon } from '../../providers/Coupon';


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

  usersAchievements: Achievement[] = [];

  constructor(public MyProvider: MyProvider, public alert: AlertController, public navCtrl: NavController, public navParams: NavParams, public achievementsProvider: AchievementsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievmentPage');
  }

  ionViewWillEnter() {
    this.usersAchievements = this.achievementsProvider.getUsersAchievements();
  }

  handleAchievementClick(achievement: Achievement) {
    if (achievement.completed) {
      let alert = this.alert.create({
        title: achievement.coupon.title,
        subTitle: achievement.coupon.subtitle + achievement.coupon.code,
        buttons: ['OK']
      });
      alert.present();
    }
  }
 
}
