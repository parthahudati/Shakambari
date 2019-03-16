import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AartiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aarti',
  templateUrl: 'aarti.html',
})
export class AartiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private diagnostic: Diagnostic,
    private toast: Toast,
    private androidPermissions: AndroidPermissions , private transfer: FileTransfer, private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AartiPage');
  }

  download(){
    

    this.diagnostic.requestExternalStorageAuthorization().then(()=>{

      const url = 'http://shakambarimata.com/uploads/unique_photo/1546963599png.png';
       const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download(url, this.file.externalRootDirectory  +'/Download/' + 'aarti.png').then((entry) => {
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
