import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievement } from "../../providers/Achievement";
import { Coupon } from '../Coupon';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AchievementsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

var usersAchievements: Achievement[] = [];
var currentAchievement: Achievement;

@Injectable()
export class AchievementsProvider {

  constructor(public http: HttpClient, private storage: Storage, private alert: AlertController) {
    console.log('Hello AchievementsProvider Provider');
  }

  updateCurrent() {
    currentAchievement = usersAchievements[usersAchievements.length - 1];
  }

  handleAchievement() {
    this.updateCurrent();
    console.log("current: ");
    console.log(currentAchievement);
    var temp: Achievement = new Achievement(null);
    temp.coupon = currentAchievement.coupon;
    temp.progress = currentAchievement.progress;
    temp.completed = currentAchievement.completed;
    temp.status = currentAchievement.status;
    temp.incrementProgress();
    currentAchievement = temp;
    usersAchievements[usersAchievements.length - 1] = currentAchievement;
    if (currentAchievement.completed) {
      usersAchievements.push(new Achievement(new Coupon(this.randomizeCouponCode())));
      this.updateCurrent();
      let alert = this.alert.create({
        title: "Coupon unlocked!",
        subTitle: "Navigate to Achievements to show coupon code!",
        buttons: ['OK']
      });
      alert.present();
    }
    this.storage.set("achievements", usersAchievements);
  }

  getUsersAchievements() {
    console.log(usersAchievements);
    return usersAchievements;
  }

  setUsersAchievements(list) {  
    usersAchievements = list;
  }

  randomizeCouponCode() : string {
    var rnd = Math.floor(Math.random() * 3);
    switch(rnd) {
      case 0: {
        return "FJ8L12K";
      }
      case 1: {
        return "K8J0CV2";
      }
      case 2: {
        return "I9M23LC";
      }
    }
  }

}
