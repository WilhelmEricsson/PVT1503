import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  testGetFacebookData() {
    this.fb.getLoginStatus().then(res => {
      if (res.status === "connected") {
        this.fb.api("/"+res.authResponse.userID+"/?fields=id,email,name,picture,gender",["public_profile"])
        .then(res => {
          let test: HTMLTextAreaElement = (<HTMLTextAreaElement>document.getElementById("fbname"));
          test.value = res.name;
        })
      }
    })
  }

}
