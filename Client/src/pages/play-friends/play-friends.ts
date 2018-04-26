import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddFriendsPage } from '../add-friends/add-friends';

/**
 * Generated class for the PlayFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-friends',
  templateUrl: 'play-friends.html',
})
export class PlayFriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayFriendsPage');
  }
  AddFriendsController(){
    this.navCtrl.push(AddFriendsPage)
  }

}
