import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  information: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.navParams.get('information');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}
