import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logDetails ;
  eventList
  constructor(public navCtrl: NavController) {

    this.eventList =
    {
      "bhajan_pdf": "1545972295.pdf",
      "bhajan_pdf2": "91db80432de93fc2d9eed4e37048be46.jpg",
      "bhajan_pdf_cover": "1547128319.jpg",
      "bhajan_pdf_cover2": "1547128548.jpg",
      "path": "pdf/"
  }
    console.log(this.eventList["bhajan_pdf"])
   

  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }
}
