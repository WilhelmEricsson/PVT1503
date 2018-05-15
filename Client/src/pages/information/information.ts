import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';


@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public informationProvider: InformationProvider) {
    this.getInformation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  getInformation() {
    this.informationProvider.getInformation()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
