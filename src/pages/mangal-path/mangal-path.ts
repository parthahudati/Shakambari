import { Toast } from '@ionic-native/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Diagnostic } from '@ionic-native/diagnostic';

/**
 * Generated class for the MangalPathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mangal-path',
  templateUrl: 'mangal-path.html',
})
export class MangalPathPage {


  images : Array<any>
  grid :Array<Array<any>>

  meeting ;
  meetingData ;
  loading ;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController,
    private diagnostic: Diagnostic,
    private toast: Toast,
    private androidPermissions: AndroidPermissions , private transfer: FileTransfer, private file: File
    ) {
  }


  ngOnInit(){

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();


      let url = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

      this.http.post(url, {
        modulename:"GetMangalPath",
       
      }, {})
        .then(data => {

          
          this.meeting = JSON.parse(data.data);

          this.meetingData = JSON.stringify(this.meeting);

          this.images = this.meeting;

          console.log('partha==meeting : ' + this.meetingData)
          console.log('Partha Images' + this.images);

        
          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);

      });
        
  }

  details(img){
    console.log('image'+ img)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MangalPathPage');
  }
  download(image){
    

    this.diagnostic.requestExternalStorageAuthorization().then(()=>{

      const url = 'http://shakambarimata.com/uploads/unique_photo/';
       const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download(url+image, this.file.externalRootDirectory  +'/Download/' + image).then((entry) => {
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
