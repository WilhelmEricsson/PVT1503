import { Component } from '@angular/core';
import { InformationPage } from '../../pages/information/information';
import { SavedInformationPage } from '../../pages/saved-information/saved-information';

/**
 * Generated class for the InformationTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'information-tabs',
  templateUrl: 'information-tabs.html'
})
export class InformationTabsComponent {

  tab1Root = InformationPage;
  tab2Root = SavedInformationPage;

  constructor() {
    
  }

}
