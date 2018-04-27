import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSignInPage } from './email-sign-in';

@NgModule({
  declarations: [
    EmailSignInPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailSignInPage),
  ],
})
export class EmailSignInPageModule {}
