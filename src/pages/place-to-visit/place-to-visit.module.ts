import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceToVisitPage } from './place-to-visit';

@NgModule({
  declarations: [
    PlaceToVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceToVisitPage),
  ],
})
export class PlaceToVisitPageModule {}
