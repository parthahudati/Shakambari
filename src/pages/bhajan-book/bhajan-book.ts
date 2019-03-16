import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-bhajan-book',
  templateUrl: 'bhajan-book.html',
})
export class BhajanBookPage {

  loading ;
  pdfDetails ;
  pdfOneCover ;
  pdfTwoCover ;
  pdfOne ;
  pdfTwo ;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController,
    private dom : DomSanitizer,
    private transfer: FileTransfer, private file: File
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BhajanBookPage');
  }

  ngOnInit(){

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();


      let url = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

      this.http.post(url, {
        modulename:"GetBhajanBook"
      }, {})
        .then(data => {

          
          this.pdfDetails = JSON.parse(data.data);

          this.pdfOne = 'http://shakambarimata.com/pdf/'+ this.pdfDetails["bhajan_pdf"];
          this.pdfTwo = 'http://shakambarimata.com/pdf/' + this.pdfDetails["bhajan_pdf2"];
          this.pdfOneCover = 'http://shakambarimata.com/pdf/' + this.pdfDetails["bhajan_pdf_cover"];
          this.pdfTwoCover = 'http://shakambarimata.com/pdf/' + this.pdfDetails["bhajan_pdf_cover2"]

          
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

  downloadOne(){

    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(this.pdfOne, this.file.externalRootDirectory  +'/Download/' + 'shakambarione.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }

  downlaodTwo(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(this.pdfTwo, this.file.externalRootDirectory  +'/Download/' + 'shakambaritwo.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }
}
