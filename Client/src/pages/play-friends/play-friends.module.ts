import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayFriendsPage } from './play-friends';

@NgModule({
  declarations: [
    PlayFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayFriendsPage),
  ],
})
export class PlayFriendsPageModule {}
