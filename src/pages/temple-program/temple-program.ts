import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AartiPage } from '../aarti/aarti';
import { ListOfProgramPage } from '../list-of-program/list-of-program';
import { AartiTimePage } from '../aarti-time/aarti-time';

/**
 * Generated class for the TempleProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temple-program',
  templateUrl: 'temple-program.html',
})
export class TempleProgramPage {

  templeProgram : Array<{title: string , component: any}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.templeProgram = [
      // { title: 'Home', icon : 'ios-home', component: HomePage },
       { title: 'Aarati', component: AartiTimePage },
       { title: 'List of Program', component: ListOfProgramPage },
       
     ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TempleProgramPage');
  }
  openPage(p){
    this.navCtrl.push(p.component)
  }

}
