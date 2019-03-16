import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplePage } from './temple';

@NgModule({
  declarations: [
    TemplePage,
  ],
  imports: [
    IonicPageModule.forChild(TemplePage),
  ],
})
export class TemplePageModule {}
