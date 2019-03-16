import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PtvDetailsPage } from './ptv-details';

@NgModule({
  declarations: [
    PtvDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PtvDetailsPage),
  ],
})
export class PtvDetailsPageModule {}
