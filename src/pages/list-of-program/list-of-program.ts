import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListOfProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-program',
  templateUrl: 'list-of-program.html',
})
export class ListOfProgramPage {

  program : 'navaratri'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.program = 'navaratri'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfProgramPage');
  }

}
