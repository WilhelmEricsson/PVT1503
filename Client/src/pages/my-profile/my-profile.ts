import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 var username;
 var email;

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, private platform: Platform) {
    this.fb.getLoginStatus().then(res => {
      if (res.status === "connected") {
        this.getFacebookData();
      }
    }).catch(err => {
      this.testGetDBName();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  getFacebookData() {
    this.fb.getLoginStatus().then(res => {
      if (res.status === "connected") {
        this.fb.api("/"+res.authResponse.userID+"/?fields=id,email,name",["public_profile"])
        .then(res => {
          username = res.name;
          email = res.email;
        })
      }
    })
  }

  testGetDBName(){

  }

}
