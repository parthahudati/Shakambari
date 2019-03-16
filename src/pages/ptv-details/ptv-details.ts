import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PtvDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ptv-details',
  templateUrl: 'ptv-details.html',
})
export class PtvDetailsPage {

  details ;
  title ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.details = navParams.data.details ;
    this.title = navParams.data.title;
    console.log(navParams.data.details)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtvDetailsPage');
  }

}
