import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';


import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { AudioPage } from '../audio/audio';
/**
 * Generated class for the BhajanAudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bhajan-audio',
  templateUrl: 'bhajan-audio.html',
})
export class BhajanAudioPage {


  images : Array<any>
  grid :Array<Array<any>>

  meeting ;
  meetingData ;
  loading ;
  albumList;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController, 
    ) {
      
  }

  ngOnInit(){

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
   this.loading.present();

    let rowNum: any = 0 ;

    this.grid = [[0]] ;

      let url = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

      this.http.post(url, {
        modulename:"AlbumList",
        
      }, {})
        .then(data => {

          
          this.meeting = JSON.parse(data.data);

          this.meetingData = JSON.stringify(this.meeting);

          this.albumList = this.meeting;

          console.log('partha==meeting : ' + this.meetingData)
          console.log('Partha Images' + this.images);

          
          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);
        this.loading.dismiss();
      });
      this.loading.dismiss();

        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BhajanAudioPage');
  }

  openPage(id){
    this.navCtrl.push(AudioPage,{
      id: id
    })
  }
  

}
