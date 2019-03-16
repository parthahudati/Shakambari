import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController , ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';
import {Http} from '@angular/http';
import { Firebase } from '@ionic-native/firebase';

import { Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http' ;
import 'rxjs/add/operator/map';

import { NativeStorage } from '@ionic-native/native-storage';
import { Toast } from '@ionic-native/toast';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username : string;
  password :string ;
  loading ;
  meeting;
  logDetails ;

  token ;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams , 
    private http: HTTP,
    private https :Http ,
    public loadingCtrl: LoadingController ,
    private toastCtrl: ToastController,
    private nativeStorage: NativeStorage, private firebase : Firebase , private toast: Toast) {

   //   console.log(`The token is ${token}`)

      this.firebase.getToken()
      .then(token => {

        this.token = token;
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));

      //this.logDetails = {"success":1,"user_id":"1063","msg":"Login successfully.."}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

  dologin(){

    console.log('token :' + this.token)
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

    let url = 'http://shakambarimata.com/shakambarimata.api/user_login_register.php' ;

    this.http.post(url, {
      modulename:"UserLogin",
      email: this.users.username,
      pws: this.users.password,
      device_id: this.token
     
    }, {})
      .then(data => {

        
        this.meeting = JSON.parse(data.data);

        
        this.logDetails = this.meeting;

      //  console.log('Parthahudati' + JSON.stringify(this.logDetails) )

      if(this.logDetails["success"]=='1'){
        this.loading.dismiss();
        this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
        .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
        );
        this.toast.show(`Login Successfully`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
        this.navCtrl.setRoot(MainPage)
      }else{
        this.loading.dismiss();

        this.toast.show(`Incorrect login credentials. Please try again`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
          
      }
        
    })
    .catch(error => {

      console.log('parthaerror1' + error.status);
      console.log( 'parthaerror2' + error.error); // error message as string
      console.log( 'parthaerror3' + error.headers);
      this.loading.dismiss();
      //this.navCtrl.push(MainPage)
      this.toast.show(`Server not Responding. Please check your internet Connection`, '5000', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
      );
        
    });
    
  }

  private users = {
    username: '',
    password: '',
    
  };  

}
