import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfProgramPage } from './list-of-program';

@NgModule({
  declarations: [
    ListOfProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfProgramPage),
  ],
})
export class ListOfProgramPageModule {}
