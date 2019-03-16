import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
/**
 * Generated class for the BhajanVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bhajan-video',
  templateUrl: 'bhajan-video.html',
})
export class BhajanVideoPage {

  images : Array<any>
  grid :Array<Array<any>>

  meeting ;
  meetingData ;
  loading ;
  videoList ;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController,
    private dom : DomSanitizer
    ) {

  }

  ngOnInit(){

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

    let rowNum: any = 0 ;

    this.grid = [[0]] ;

      let url = 'http://shakambarimata.com/shakambarimata.api/cms.php' ;

      this.http.post(url, {
        modulename:"BhajanVideoList"
      }, {})
        .then(data => {

          
          this.meeting = JSON.parse(data.data);

          this.meetingData = JSON.stringify(this.meeting);

         this.videoList = this.meeting;

          console.log('partha==meeting : ' + this.meetingData)
          console.log('Partha Images' + this.images);

          
          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);

      });
      this.loading.dismiss();
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BhajanVideoPage');
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ vid)
}
}
