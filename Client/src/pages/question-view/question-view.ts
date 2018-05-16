import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 
import { InformationProvider } from '../../providers/information/information';


@IonicPage()
@Component({
  selector: 'page-question-view',
  templateUrl: 'question-view.html',
})
export class QuestionViewPage {
  information: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public informationProvider: InformationProvider) {
      this.getInformation();
  }

  getInformation() {
    this.informationProvider.getInformation()
    .then(data => {
      this.information = data;
      console.log(this.information);
    });
  }
  
}
