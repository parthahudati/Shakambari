import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalTransportPage } from './local-transport';

@NgModule({
  declarations: [
    LocalTransportPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalTransportPage),
  ],
})
export class LocalTransportPageModule {}
