import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';


import {Http} from '@angular/http';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  images : Array<any>
  grid :Array<Array<any>>

  meeting ;
  meetingData ;
  loading ;
  submitForm ;
  contactDetails;
  address;
  phone_one ;
  phone_two;
  phone_three;
  email_account ;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController,
    private toast: Toast
    ) {

    //   this.contactDetails = {
    //     "contact_address": "Sri Shakambari Mata Mandir P.O. - Sakarai\r\nVia :- Gurara,Dist:- Sikar( Rajasthan) \r\nPin : 332721\r\n9832161966",
    //     "contact_email": "monu@shakambarimata.com",
    //     "contact_no1": "9832171031",
    //     "contact_no2": "9414059481",
    //     "contact_no3": "9430761177",
    //     "whatsapp_no": "9830085673",
    //     "whatsapp_link": "https://chat.whatsapp.com/0V9nFE8np9LB20JWZL5yKh"
    // }
    // this.address = this.contactDetails["contact_address"];
    // this.phone_one= this.contactDetails['contact_no1'];
    // this.phone_two = this.contactDetails["contact_no2"];
    // this.phone_three = this.contactDetails["contact_no3"];
  }

  ngOnInit(){

  
  }
  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

   

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
          this.phone_one= this.contactDetails['contact_no1'];
          this.phone_two = this.contactDetails["contact_no2"];
          this.phone_three = this.contactDetails["contact_no3"];
          this.email_account = this.contactDetails["contact_email"];
          this.loading.dismiss();

      })
      .catch(error => {

        console.log('parthaerror1' + error.status);
        console.log( 'parthaerror2' + error.error); // error message as string
        console.log( 'parthaerror3' + error.headers);

      });
      this.loading.dismiss();
  }

  public contact ={
    name : '',
    email : '' ,
    number : '',
    message : ''

  }

  submit(details){
    console.log('Partha'+details.name);

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

    let url = 'http://shakambarimata.com/shakambarimata.api/gallery.php' ;

    this.http.post(url, {
      modulename:"SendMail",
      full_name : details.name ,
      email: details.email,
      phone :details.number,
    //  subject: details.subject,
      msg : details.message
     
    }, {})
      .then(data => {

        
        this.meeting = JSON.parse(data.data);

        
        this.submitForm = this.meeting;

      //  console.log('Parthahudati' + JSON.stringify(this.logDetails) )

      if(this.submitForm["stat"]=='1'){
        this.loading.dismiss();
        this.toast.show(`Thank you for contacting Shakambarimata`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
          
      }else{
        this.toast.show(`Thank you for contacting Shakambarimata`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
        this.loading.dismiss();
        
      }

      this.contact ={
        name : '',
        email : '' ,
        number : '',
        message : ''
    
      }
        
    })
    .catch(error => {

      console.log('parthaerror1' + error.status);
      console.log( 'parthaerror2' + error.error); // error message as string
      console.log( 'parthaerror3' + error.headers);
      this.loading.dismiss();
      //this.navCtrl.push(MainPage)
      
    });
    
  }
}
