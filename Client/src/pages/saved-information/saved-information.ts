import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';

/**
 * Generated class for the SavedInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved-information',
  templateUrl: 'saved-information.html',
})
export class SavedInformationPage {

  savedInformation: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public informationProvider: InformationProvider) {
   this.getInformationArray();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedInformationPage');
  }

  getInformationArray(){
    
      var test = this.informationProvider.getArray() 
      for(let e of test){
        this.savedInformation.push(e);
      }
      console.log(test);
  }

}
