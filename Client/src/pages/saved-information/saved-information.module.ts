import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedInformationPage } from './saved-information';

@NgModule({
  declarations: [
    SavedInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedInformationPage),
  ],
})
export class SavedInformationPageModule {}
