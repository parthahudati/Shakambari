import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GelleryPage } from './gellery';

@NgModule({
  declarations: [
    GelleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GelleryPage),
  ],
})
export class GelleryPageModule {}
