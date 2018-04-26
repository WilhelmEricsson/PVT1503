import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-friends',
templateUrl: 'add-friends.html'
  
})
export class AddFriendsPage {
  thisFriend;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeFriend();
  }
  initializeFriend(){
    //I this.thisFriends ska databasen ligga där alla Friends/Users ligger.
    this.thisFriend = [
      'Arian',
      'Ruben',
      'Katya',
      'Jakob',
      'Wilhelm',
      'Elias',
      'Andreas',
      'Test',
      'Test1',
      'Test2',
      'Test3',
      'Test4',
      'Test5',
      'Test6',
      'Test7'

    ];
  }

  getFriendSearch($event){
    //Reset items/Friends back to all of the items/friends
    this.initializeFriend();

    //Set value to the value of the "fr" target
    var value = $event.target.value;

    //If the value is an empty string, dont filter the friends
    if (value && value.trim() != ''){
      this.thisFriend = this.thisFriend.filter((friends)=>{
        return (friends.toLowerCase().indexOf(value.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFriendsPage');
 }

}
