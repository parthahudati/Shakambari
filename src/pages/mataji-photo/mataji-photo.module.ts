import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatajiPhotoPage } from './mataji-photo';

@NgModule({
  declarations: [
    MatajiPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(MatajiPhotoPage),
  ],
})
export class MatajiPhotoPageModule {}
