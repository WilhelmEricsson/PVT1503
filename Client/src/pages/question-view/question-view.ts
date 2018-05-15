import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 


/**
 * Generated class for the QuestionViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-view',
  templateUrl: 'question-view.html',
})
export class QuestionViewPage {
  information : Observable<any>;

  question: String = "test fråga";
  alternatives: Array<String> = ["alt1", "alt2", "alt3", "alt4"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.information = this.httpClient.get('localhost:8080/information/all');
    
  }

  

  openDetails(information){
    this.navCtrl.push('InformationPage', {information: information});
  }

}
