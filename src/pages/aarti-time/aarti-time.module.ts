import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AartiTimePage } from './aarti-time';

@NgModule({
  declarations: [
    AartiTimePage,
  ],
  imports: [
    IonicPageModule.forChild(AartiTimePage),
  ],
})
export class AartiTimePageModule {}
