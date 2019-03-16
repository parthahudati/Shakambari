import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';


import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
/**
 * Generated class for the UniquePhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unique-photo',
  templateUrl: 'unique-photo.html',
})
export class UniquePhotoPage {

  images : Array<any>
  grid :Array<Array<any>>

  meeting ;
  meetingData ;
  loading ;

  constructor(
    public navCtrl: NavController ,
    public navParams: NavParams,
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniquePhotoPage');
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
        modulename:"UniquePhotoList",
        email:'roni55@gmail.com',
        pws:'123456',
        device_id:'123456jshjdsfh'
      }, {})
        .then(data => {

          
          this.meeting = JSON.parse(data.data);

          this.meetingData = JSON.stringify(this.meeting);

          this.images = this.meeting;

          console.log('partha==meeting : ' + this.meetingData)
          console.log('Partha Images' + this.images);

          for (let i = 0; i < this.images.length; i+=2) { //iterate images

            // this.grid[0]= Array(2);
        
            // this.grid[0][0]
            // this.grid[1] = Array(2)
        
            this.grid[rowNum] = Array(2); //declare two elements per row
        
            if (this.images[i]) { //check file URI exists
              this.grid[rowNum][0] = 'http://shakambarimata.com/' + this.images[i].path + '/'+ this.images[i].photo //insert image
            }
        
            if (this.images[i+1]) { //repeat for the second image
              this.grid[rowNum][1] = 'http://shakambarimata.com/'+ this.images[i].path + '/' + this.images[i+1].photo
            }
        
            rowNum++; //go on to the next row
          }
          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);

      });
        
  }

  details(img){
    console.log(img)
  }

}
