import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';

import { DomSanitizer } from "@angular/platform-browser";

import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { TemplePage } from '../temple/temple';
import { UniquePhotoPage } from '../unique-photo/unique-photo';
import { TemplePhotoPage } from '../temple-photo/temple-photo';
import { MatajiPhotoPage } from '../mataji-photo/mataji-photo';
import { KundPhotoPage } from '../kund-photo/kund-photo';
import { GoshalaPhotoPage } from '../goshala-photo/goshala-photo';
import { BhajanAudioPage } from '../bhajan-audio/bhajan-audio';
import { BhajanVideoPage } from '../bhajan-video/bhajan-video';
import { MangalPathPage } from '../mangal-path/mangal-path';
import { HowToReachPage } from '../how-to-reach/how-to-reach';
import { DharamshalaPage } from '../dharamshala/dharamshala';
import { EventsPage } from '../events/events';
import { BhajanBookPage } from '../bhajan-book/bhajan-book';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  items = [
    'Unique Photo',
    "Temple Photo",
    'Mataji Photo',
    'Kund Photo',
    "Goshala Photo"
  ];

  
  galleryPages: Array<{title: string , component: any}>;
  events : Array<any>
  videolist : Array<any>
  grid :Array<Array<any>>

  meeting ;
  meetingData ;
  loading ;
  audiolist;
  videoList ;
  dailyDarshan;
  eventPhotoList ;
  contactDetails ;
  contactOne ;
  phone_one;
  phone_two ;
  phone_three ;
  facebook_link;
  youtube_link ;
  whatsapp_link;
  contactTwo;
  contactThree ;
  whatsapp_number;
  contactAddress ;
  sliderImages ;
  email_one;
  address;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams , 
    private http: HTTP,
    private https :Http ,
    private dom : DomSanitizer ,
    public loadingCtrl: LoadingController) {
  
    this.galleryPages = [
      // { title: 'Home', icon : 'ios-home', component: HomePage },
       { title: 'Unique Photo', component: UniquePhotoPage },
       { title: 'Temple Photo', component: TemplePhotoPage },
       { title: 'Mataji Photo', component: MatajiPhotoPage },
       { title: 'Kund Photo', component: KundPhotoPage },
       { title: 'Goshala Photo', component: GoshalaPhotoPage },
       
     ];

  //    this.dailyDarshan = [
  //     {
  //         "daily_darshan_id": "1",
  //         "content": "आज के दर्शन सकराय धाम\r\n",
  //         "photo": "1547449081.jpg",
  //         "path": "uploads/daily_darshan"
  //     }
  // ]

  console.log(this.events)

     this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

    this.getEventList();
    this.getAudioList();
    this.getvideoList();
    this.getDailyDarshan();
    this.getContactDetails();
    this.getFirstSilder();
    this.getEventPhotoList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  itemSelected(item: string) {
    if(item=='Unique Photo'){
      console.log('1')
    }
    if(item=='Temple Photo'){
      this.navCtrl.push(TemplePage)
    }
    if(item=='Mataji Photo'){
      console.log('3')
    }
    if(item=='Kund Photo'){
      console.log('4')
    }
    if(item=='Goshala Photo'){
      console.log('5')
    }
  }

  openPage(p){
    this.navCtrl.push(p.component)
  }

  detailsImage(image){
    console.log( 'ParthaImage' + image);
    
  }


  getEventPhotoList(){
    let eventphotourl = 'http://shakambarimata.com/shakambarimata.api/cms.php' ;

      this.http.post(eventphotourl, {
        modulename:"GetHomePageEventPhotoList",
      }, {})
        .then(data => {
          this.meeting = JSON.parse(data.data);
          this.eventPhotoList = this.meeting;
          console.log('Partha Images' + this.events);

          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);
        this.loading.dismiss();
      });
        
    
  }


  getFirstSilder(){
    
    
   
    let sliderurl = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

    this.http.post(sliderurl, {
      modulename:"BannerList"
    }, {})
      .then(data => {
        this.sliderImages = JSON.parse(data.data);
        

        this.loading.dismiss();

    })
    .catch(error => {

      console.log('parthaerror1' + error.status);
      console.log( 'parthaerror2' + error.error); // error message as string
      console.log( 'parthaerror3' + error.headers);
      this.loading.dismiss();
    });
      
  }


  getAudioList(){

    
    
    
    let audiourl = 'http://shakambarimata.com/shakambarimata.api/cms.php' ;

    this.http.post(audiourl, {
      modulename:"GetHomePageAudioList",
    }, {})
      .then(data => {
        this.meeting = JSON.parse(data.data);
        this.audiolist = this.meeting;
        console.log('Partha Images' + this.events);

        this.loading.dismiss();

    })
    .catch(error => {

      console.log('parthaerror1' + error.status);
      console.log( 'parthaerror2' + error.error); // error message as string
      console.log( 'parthaerror3' + error.headers);
      this.loading.dismiss();
    });

  }

 

  getvideoList(){

      

      let url = 'http://shakambarimata.com/shakambarimata.api/cms.php' ;

      this.http.post(url, {
        modulename:"GetHomePageVideoList"
      }, {})
        .then(data => {

          
          this.videoList = JSON.parse(data.data);

        //   this.meetingData = JSON.stringify(this.meeting);

        //  this.videoList = this.meeting;

         
          
          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);
        this.loading.dismiss();
      });
      
  }

  getEventList(){

    
   
      let eventurl = 'http://shakambarimata.com/shakambarimata.api/cms.php' ;

      this.http.post(eventurl, {
        modulename:"GetEventList",
      }, {})
        .then(data => {
          this.meeting = JSON.parse(data.data);
          this.events = this.meeting;
          console.log('Partha Images' + this.events);

          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);
        this.loading.dismiss();
      });
        

  }
  getDailyDarshan(){
 
    
      let eventurl = 'http://shakambarimata.com/shakambarimata.api/cms.php' ;

      this.http.post(eventurl, {
        modulename:"GetDailyDarshan",
      }, {})
        .then(data => {
          this.meeting = JSON.parse(data.data);
          this.dailyDarshan = this.meeting;
          console.log('Partha Images' + this.events);

          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);
        this.loading.dismiss();
      });
        
    
  }

  getContactDetails(){
    

    let url = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

    this.http.post(url, {
      modulename:"GetContactDetails"
    }, {})
      .then(data => {

        
        this.meeting = JSON.parse(data.data);

        this.meetingData = JSON.stringify(this.meeting);

        this.contactDetails = this.meeting;

        console.log('partha==meeting : ' + this.meetingData)
        this.address = this.contactDetails["contact_address"];
        this.email_one = this.contactDetails["contact_email"];
        this.phone_one= this.contactDetails['contact_no1'];
        this.phone_two = this.contactDetails["contact_no2"];
        this.phone_three = this.contactDetails["contact_no3"];
        this.whatsapp_number = this.contactDetails["whatsapp_no"];
        this.facebook_link = this.contactDetails["facebook_link"]
        this.whatsapp_link = this.contactDetails["whatsapp_link"];
        this.youtube_link = this.contactDetails["youtube_link"];
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
  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ vid)
}
  bhajanAudio(){
    this.navCtrl.push(BhajanAudioPage)
  }
  
  bhajanVideo(){
    this.navCtrl.push(BhajanVideoPage)
  }  

  mangalPath(){
    this.navCtrl.push(MangalPathPage)
  }

  eventPhoto(){
    this.navCtrl.push(EventsPage)
  }
  howToReach(){
    this.navCtrl.push(HowToReachPage);
  }

  dharmashala(){
    this.navCtrl.push(DharamshalaPage)
  }

  uniquePhoto(){
    this.navCtrl.push(UniquePhotoPage)
  }

  bhajanBook(){
    this.navCtrl.push(BhajanBookPage)
  }

  // audiolist = [
  //   {
  //       "audio_id": "8",
  //       "path": "uploads/audio",
  //       "song_title": "Shakambari Aamar Khani",
  //       "audio_file": "e7d2ea820bf1b868783d0ea7a18a6d6a.mp3"
  //   },
  //   {
  //       "audio_id": "9",
  //       "path": "uploads/audio",
  //       "song_title": "Ek Dakhiyo Sandesho",
  //       "audio_file": "6f46ca929dd64928f57ec420739f7077.mp3"
  //   }
  // ]


  facebook(){
    window.open(this.facebook_link, '_system', 'location=yes')
  }

  youtube(){
    window.open(this.youtube_link, '_system', 'location=yes')
  }
  whatsapp(){
    window.open(this.whatsapp_link, '_system', 'location=yes')
  }
 
}
