import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HowToReachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how-to-reach',
  templateUrl: 'how-to-reach.html',
})
export class HowToReachPage {
  howToReach :'air'
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.howToReach ='air'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToReachPage');
  }

}
