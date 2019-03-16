import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map' 
import { TempleHistoryPage } from '../temple-history/temple-history';
import { MatajiHistoryPage } from '../mataji-history/mataji-history';
import { AboutMahantjiPage } from '../about-mahantji/about-mahantji';
import { HowToReachPage } from '../how-to-reach/how-to-reach';
import { MatajiPoshakSizePage } from '../mataji-poshak-size/mataji-poshak-size';
import { LocalTransportPage } from '../local-transport/local-transport';
/**
 * Generated class for the TemplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temple',
  templateUrl: 'temple.html',
})
export class TemplePage {

  information: any[];
  templePage : Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams , private http: Http) {
   
    this.templePage = [
      // { title: 'Home', icon : 'ios-home', component: HomePage },
       { title: 'History of Temple', component: TempleHistoryPage },
       { title: 'History of Mataji',  component: MatajiHistoryPage },
       { title: 'About Mahantji',  component: AboutMahantjiPage },
       { title: 'How To Reach',  component: HowToReachPage },
       { title: 'Mataji Poshak Size',  component: MatajiPoshakSizePage },
       { title: 'Local Transport',  component: LocalTransportPage },

     ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplePage');
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  openPage(p){
    this.navCtrl.push(p.component)
  }
}
