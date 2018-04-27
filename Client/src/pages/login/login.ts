import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccountPage } from '../create-account/create-account';
import { EmailSignInPage } from '../email-sign-in/email-sign-in';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  FacebookLogInController() {
    this.navCtrl.setRoot(HomePage);
  }

  CreateAccountController() {
    this.navCtrl.push(CreateAccountPage);
  }

  EmailSignInController() {
    this.navCtrl.push(EmailSignInPage);
  }

}
