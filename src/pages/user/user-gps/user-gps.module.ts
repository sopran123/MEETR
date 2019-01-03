import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserGPSPage } from './user-gps';

@NgModule({
  declarations: [
    UserGPSPage,
  ],
  imports: [
    IonicPageModule.forChild(UserGPSPage),
  ],
})
export class UserGPSPageModule {}
