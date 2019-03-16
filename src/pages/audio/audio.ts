import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';


import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {
  id ;
  audioList;

  meeting ;
  meetingData ;
  loading ;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController,private diagnostic: Diagnostic,
    private toast: Toast,
    private androidPermissions: AndroidPermissions , private transfer: FileTransfer, private file: File
    
    ) {
    this.id = navParams.data.id;
    console.log(this.id)

  //   this.audioList= [
  //     {
  //         "audio_id": "9",
  //         "singer_id": "5",
  //         "singer_name": "Shree Ladia ",
  //         "path": "uploads/audio",
  //         "song_title": "Ek Dakhiyo Sandesho",
  //         "audio_file": "6f46ca929dd64928f57ec420739f7077.mp3"
  //     },
  //     {
  //         "audio_id": "8",
  //         "singer_id": "5",
  //         "singer_name": "Shree Ladia ",
  //         "path": "uploads/audio",
  //         "song_title": "Shakambari Aamar Khani",
  //         "audio_file": "e7d2ea820bf1b868783d0ea7a18a6d6a.mp3"
  //     }
  // ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioPage');
  }

  ngOnInit(){

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();


      let url = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

      this.http.post(url, {
        modulename:"AlbumWiseBhajanAudioList",
        album_id: this.id,
      }, {})
        .then(data => {

          
          this.meeting = JSON.parse(data.data);

          this.meetingData = JSON.stringify(this.meeting);

          this.audioList = this.meeting;

          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);

      });
      this.loading.dismiss();

  }


  download(songs , song_name){
    

    this.toast.show(`Downloading`, '3000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
    this.diagnostic.requestExternalStorageAuthorization().then(()=>{

      const url = 'http://shakambarimata.com/uploads/audio/';
       const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download(url+songs, this.file.externalRootDirectory  +'/Download/' + song_name+'.mp3').then((entry) => {
          console.log('download complete: ' + entry.toURL());
          this.toast.show(`Saved to Download`, '3000', 'bottom').subscribe(
            toast => {
              console.log(toast);
            }
          );
        }, (error) => {
          // handle error
        });
    }).catch(error=>{
     console.log('parthaError'+ error)
    });
 
  }
}
