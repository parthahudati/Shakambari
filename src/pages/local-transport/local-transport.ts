import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocalTransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-transport',
  templateUrl: 'local-transport.html',
})
export class LocalTransportPage {

  howToReach :'air'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.howToReach ='air'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalTransportPage');
  }

}
