import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseGamePage } from './choose-game';

@NgModule({
  declarations: [
    ChooseGamePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseGamePage),
  ],
})
export class ChooseGamePageModule {}
