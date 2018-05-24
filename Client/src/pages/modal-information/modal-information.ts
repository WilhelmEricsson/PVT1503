import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-information',
  templateUrl: 'modal-information.html',
})
export class ModalInformationPage {
  information: any

  

  constructor(private navParams: NavParams, private view: ViewController) {
    
    

  }

  ionViewWillLoad(){
    this.information = this.navParams.get("data");
    
    console.log(this.information)
  }


  closeModal() {
    this.view.dismiss();  
  }


  

}
