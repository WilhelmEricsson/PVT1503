import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';


@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {


  information: any;
  name: String;
  content: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public informationProvider: InformationProvider) {

    this.getInformation();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  getInformation() {
    this.informationProvider.getInformation()
    .then(data => {
      this.information = data;
      console.log(this.information);
      for(let entry of this.information){
        this.name = entry.name;
        this.content = entry.information;
      }
    });
    
    
  }
  getInformationByLightPostId(id: number) {
    this.informationProvider.getInformationByLightPostId(id)
      .then(data => {
        this.information = data;
        console.log(this.information);

      });
      
  }



}
