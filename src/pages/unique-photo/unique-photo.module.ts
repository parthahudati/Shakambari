import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniquePhotoPage } from './unique-photo';

@NgModule({
  declarations: [
    UniquePhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(UniquePhotoPage),
  ],
})
export class UniquePhotoPageModule {}
