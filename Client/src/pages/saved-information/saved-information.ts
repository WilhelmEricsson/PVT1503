import { Component } from '@angular/core';
import { IonicPage, ModalController, Modal, ModalOptions} from 'ionic-angular';
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

  constructor(public informationProvider: InformationProvider, private modal: ModalController) {
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

  openModal(information){

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false

    }
    const myModal: Modal = this.modal.create('ModalInformationPage', {data: information});
    
    myModal.present();

    


  }

}
