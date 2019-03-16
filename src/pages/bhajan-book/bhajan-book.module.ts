import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BhajanBookPage } from './bhajan-book';

@NgModule({
  declarations: [
    BhajanBookPage,
  ],
  imports: [
    IonicPageModule.forChild(BhajanBookPage),
  ],
})
export class BhajanBookPageModule {}
