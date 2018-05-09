import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccountPage } from '../create-account/create-account';
import { EmailSignInPage } from '../email-sign-in/email-sign-in';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoadingController, ToastController} from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import {AuthProvider} from "../../providers/auth/auth";
import {finalize} from 'rxjs/operators';

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

  isLoggedIn:boolean = false;
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook,private readonly loadingCtrl: LoadingController,
    private readonly authProvider: AuthProvider,
    private readonly toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  FacebookLogInController() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if(res.status === "connected") {
        this.isLoggedIn = true;
        this.getUserDetail(res.authResponse.userID);
        this.navCtrl.setRoot(HomePage);
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res.name);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

  CreateAccountController() {
    this.navCtrl.push(CreateAccountPage);
  }

  BypassSignIn() {
    this.navCtrl.setRoot(HomePage);
  }

  EmailSignInController() {
    this.navCtrl.push(EmailSignInPage);
  }

  /**test */
  signup() {
    this.navCtrl.push(SignupPage);
  }

  login(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authProvider
      .login(value)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        () => {},
        err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }
/**test */

}
