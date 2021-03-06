import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";

import { NavController } from "ionic-angular";


/*
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProvider {
  public tap: number = 0;

  constructor(public alertCtrl: AlertController) {

  }
  showCoupon(){
    if(this.tap == 2){
      let alert = this.alertCtrl.create({
        title: 'Coupon!',
        subTitle: 'You got a coupon at Kungafamiljen. Show this code to the guard: X4SDF',
        buttons: ['OK']
      });
      alert.present();

    }

  }

  tapEvent() {
    
    this.tap++

    if(this.tap == 2){ 
      let alert = this.alertCtrl.create({
        title: 'Coupon!',
        subTitle: 'You got a coupon at Kungafamiljen. Show this code to the guard: X4SDF',
        buttons: ['OK']
      });
      alert.present();



    
    }
    if(this.tap > 2){
      this.tap = 0;
    }
  }

}
