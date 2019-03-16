import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoshalaPhotoPage } from './goshala-photo';

@NgModule({
  declarations: [
    GoshalaPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(GoshalaPhotoPage),
  ],
})
export class GoshalaPhotoPageModule {}
