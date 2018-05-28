import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-information',
  templateUrl: 'modal-information.html',
})
export class ModalInformationPage {
  @ViewChild(Slides) slides: Slides;

  information: any
  name: string;
  

  

  constructor(private navParams: NavParams, private view: ViewController, private informationProvider: InformationProvider) {
    
    

  }

  ionViewWillLoad(){
    this.information = this.navParams.get("data");
    
    console.log(this.information)
  }


  closeModal() {
    this.view.dismiss();  
  }


  handleShare() {
    let currentIndex = this.slides.getActiveIndex();
    var id;
    if (this.information.length == 2) {
      if (currentIndex == 0) {
        id = this.information[0].id;
      } else {
        id = this.information[1].id;
      }
    } else {
      id = this.information[0].id;
    }
    console.log(id);
    //this.informationProvider.handleShare(id);
  }

}
