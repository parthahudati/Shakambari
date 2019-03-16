import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatajiHistoryPage } from './mataji-history';

@NgModule({
  declarations: [
    MatajiHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MatajiHistoryPage),
  ],
})
export class MatajiHistoryPageModule {}
