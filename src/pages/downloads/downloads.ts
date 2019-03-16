import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MangalPathPage } from '../mangal-path/mangal-path';
import { ChalishaPage } from '../chalisha/chalisha';
import { ShakambariMahamantraPage } from '../shakambari-mahamantra/shakambari-mahamantra';
import { AartiPage } from '../aarti/aarti';
import { DurgaKavachPage } from '../durga-kavach/durga-kavach';
import { JeevanParichayPage } from '../jeevan-parichay/jeevan-parichay';
import { BhajanBookPage } from '../bhajan-book/bhajan-book';
import { PanchangPage } from '../panchang/panchang';
import { BhajanAudioPage } from '../bhajan-audio/bhajan-audio';
import { BhajanVideoPage } from '../bhajan-video/bhajan-video';

/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {

  downloadPages: Array<{title: string, icon : string , component: any}>;
  
  downloadsItem = [
    'Mangal Path',
    "Chalisa",
    'Shakambari Mahamantra',
    'AArti',
    "Durga Kaavach"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.downloadPages = [
      // { title: 'Home', icon : 'ios-home', component: HomePage },
       { title: 'Mangal Path', icon : 'ios-contacts', component: MangalPathPage },
       { title: 'Chalisa',icon : 'logo-usd',  component: ChalishaPage },
       { title: 'Shakambari Mahamantra',icon : 'logo-usd',  component: ShakambariMahamantraPage },
       { title: 'AArti',icon : 'logo-usd',  component: AartiPage },
       { title: 'Durga Kaavach',icon : 'logo-usd',  component: DurgaKavachPage },
       { title: 'Jeevan Parichay',icon : 'logo-usd',  component: JeevanParichayPage },
       { title: 'Bhajan Book',icon : 'logo-usd',  component: BhajanBookPage },
       { title: 'Panchang',icon : 'logo-usd',  component: PanchangPage },
       { title: 'Bhajan Audio',icon : 'logo-usd',  component: BhajanAudioPage },
       { title: 'Bhajan VIdeo',icon : 'logo-usd',  component: BhajanVideoPage },

     ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }

  openPage(p){
    this.navCtrl.push(p.component)
  }

}
