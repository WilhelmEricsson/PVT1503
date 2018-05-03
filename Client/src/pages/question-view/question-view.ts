import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  question: String = "test fråga";
  alternatives: Array<String> = ["alt1", "alt2", "alt3", "alt4"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionViewPage');
  }

}
