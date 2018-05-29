import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ToastController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {finalize} from 'rxjs/operators';
import {MyProfileProvider} from "../../providers/my-profile/my-profile";

/**
 * Generated class for the EmailSignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-sign-in',
  templateUrl: 'email-sign-in.html',
})
export class EmailSignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly loadingCtrl: LoadingController,
    private readonly authProvider: AuthProvider,
    private readonly toastCtrl: ToastController, private myProfileProvider:MyProfileProvider) {
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
        () => {
          this.myProfileProvider.setUser(value.username);
        },
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
  ionViewDidLoad() {
  }

}
