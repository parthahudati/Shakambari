import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController , ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import { Firebase } from '@ionic-native/firebase';
import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';
import { MainPage } from '../main/main';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username : string;
  password :string ;
  email : string ;
  phone : number ;
  addressone : string ;
  addresstwo : string ;
  state : string ;
  city :string ;
  pincode :number ;

  loading ;
  meeting;
  regDetails ;
  token ;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams , 
    private http: HTTP,
    private https :Http ,
    
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController, private firebase : Firebase , private toast: Toast) {
      this.firebase.getToken()
      .then(token => {
        this.token = token;
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  private users = {
    username: '',
    password: '',
    email :'',
    phone : '',
    addressone : '' ,
    state : '',
    city : '' ,
    pincode : ''
     
  };

  doRegister(){

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

    let url = 'http://shakambarimata.com/shakambarimata.api/user_login_register.php' ;

    this.http.post(url, {
      modulename:"UserRegistration",
      name:this.users.username,
      email:this.users.email,
      phone:this.users.phone,
      address:this.users.addressone,
      city:this.users.city,
      state:this.users.state,
      zip:this.users.pincode,
      REMOTE_ADDR:this.users.password,
      device_id: this.token
     
    }, {})
      .then(data => {

        
        this.meeting = JSON.parse(data.data);

        
        this.regDetails = this.meeting;

        if(this.regDetails["success"]=='1'){
          this.loading.dismiss();
          this.toast.show(`Registered Successfully`, '5000', 'bottom').subscribe(
            toast => {
              console.log(toast);
            }
          );
            
          this.navCtrl.setRoot(MainPage)
        }else{
          this.loading.dismiss();
          this.toast.show(`Email or Mobile already exists`, '5000', 'bottom').subscribe(
            toast => {
              console.log(toast);
            }
          );
            
        }

        this.loading.dismiss();
        
    })
    .catch(error => {

      console.log('parthaerror1' + error.status);
      console.log( 'parthaerror2' + error.error); // error message as string
      console.log( 'parthaerror3' + error.headers);

      this.toast.show(`Server not responding Please check your internet Connection`, '5000', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
      );
        
    });

    console.log(this.users.username)
    
  }

}
