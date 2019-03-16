import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UniquePhotoPage } from '../unique-photo/unique-photo';
import { TemplePhotoPage } from '../temple-photo/temple-photo';
import { MatajiPhotoPage } from '../mataji-photo/mataji-photo';
import { KundPhotoPage } from '../kund-photo/kund-photo';
import { GoshalaPhotoPage } from '../goshala-photo/goshala-photo';

/**
 * Generated class for the GelleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gellery',
  templateUrl: 'gellery.html',
})
export class GelleryPage {

  galleryItems = [
    'Unique Photo',
    "Temple Photo",
    'Mataji Photo',
    'Kund Photo',
    "Goshala Photo"
  ];

  galleryPages: Array<{title: string , component: any}>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
      
  this.galleryPages = [
    // { title: 'Home', icon : 'ios-home', component: HomePage },
     { title: 'Unique Photo', component: UniquePhotoPage },
     { title: 'Temple Photo', component: TemplePhotoPage },
     { title: 'Mataji Photo', component: MatajiPhotoPage },
     { title: 'Kund Photo', component: KundPhotoPage },
     { title: 'Goshala Photo', component: GoshalaPhotoPage },
     
   ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GelleryPage');
  }

  openPage(p){
    this.navCtrl.push(p.component)
  }


}
