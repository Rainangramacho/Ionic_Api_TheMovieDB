import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosLoginPage } from './pos-login';

@NgModule({
  declarations: [
    PosLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PosLoginPage),
  ],
})
export class PosLoginPageModule {}
