import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PtvDetailsPage } from '../ptv-details/ptv-details';

/**
 * Generated class for the PlaceToVisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-to-visit',
  templateUrl: 'place-to-visit.html',
})
export class PlaceToVisitPage {

  visitList ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.visitList = [
      {title : 'बाराही देवी' , description : 'यह शाकंभरी मंदिर से 3.5 कि. मी. ऊपर पहाड़ी पर है, ईसकि मान्यता है, कि मॉ शाकंभरी का मंदिर ईन्ही के अधीन आता है व नाथजी कि गद्दी भी यही से नियुक्त होती हैं'},
      {title : 'नाडा के भैरुजी' , description : 'ये भी मैयाजी से 3 कि. मी. ऊपर है, यहॉ का रास्ता मुनीजी के आश्रम से होकर पहाड़ी पर है, ये मॉ शाकंभरीजी के भैरुजी है'},
      {title : 'शिवनाथजी का मंदिर' , description : 'ये मैया के प्रथम नाथजी हैं ईनके बारे मे सुना है, कि मैया ईनसे बात करती थी, व ये जब चाहते थे, तब मैयाजी को बुला लेते थे, और ये समाधि लेने के बाद भी शैर के रुप मे कई बार मंदिर मे आते थे,'},
      {title : 'रावण कुंड' , description : 'ये कुंड शिवनाथजी के मंदिर से आगे हैं'},
      {title : 'नाग कुंड' , description : 'ये गोरिया रोड़ पर सकराय से 4 कि. मी. कि दुरी पर है, यहॉ पहाड़ से पानी 12 रो महीना बहता रहता है,'},
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceToVisitPage');
  }

  details(description , title){
    this.navCtrl.push(PtvDetailsPage,{
      title : title ,
      details : description
    })
  }

}
