import { LoginPage } from './../pages/login/login';
import { PlaceToVisitPage } from './../pages/place-to-visit/place-to-visit';
import { Component , ViewChild} from '@angular/core';
import { Platform ,Nav} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TempleProgramPage } from '../pages/temple-program/temple-program';
import { TemplePage } from '../pages/temple/temple';
import { MainPage } from '../pages/main/main';
import { GelleryPage } from '../pages/gellery/gellery';
import { DownloadsPage } from '../pages/downloads/downloads';
import { ContactUsPage } from '../pages/contact-us/contact-us';

import { NativeStorage } from '@ionic-native/native-storage';
import { GunganYatraPage } from '../pages/gungan-yatra/gungan-yatra';
import { DharamshalaPage } from '../pages/dharamshala/dharamshala';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;

  loginProperty :any;

  pages: Array<{title: string, icon : string , component: any}>;
  constructor(platform: Platform,splashScreen: SplashScreen, private nativeStorage: NativeStorage ) {
    platform.ready().then(() => {


      if(this.nativeStorage.getItem('myitem')
      .then(
        (data) =>{
          console.log('ParthamyItem' +data)
          this.loginProperty = JSON.stringify(data["property"]);

          if(this.loginProperty){
            this.rootPage = MainPage;
          }

        } 
        
      )){
        
      }
      // else{
      //   this.rootPage = HomePage;
      // }

      if(!this.loginProperty){
        this.rootPage = HomePage;  
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      splashScreen.hide();
    });

    this.pages = [
      // { title: 'Home', icon : 'ios-home', component: HomePage },
       { title: 'Home', icon : 'ios-contacts', component: MainPage },
       { title: 'Temple',icon : 'logo-usd',  component: TemplePage },
       { title: 'Temple Program', icon : 'ios-contact', component: TempleProgramPage },
       { title: 'Gallery',icon : 'md-call',  component: GelleryPage },
       { title: 'Downloads',icon : 'ios-clipboard',  component: DownloadsPage },
       { title: 'Dharmsala',icon : 'ios-clipboard',  component: DharamshalaPage },
       { title: 'Place To Visit',icon : 'ios-clipboard',  component: PlaceToVisitPage },
       { title: 'Gungan Yatra',icon : 'ios-clipboard',  component: GunganYatraPage },
       { title: 'Contact Us',icon : 'ios-checkbox',  component: ContactUsPage },
     ];
 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout(){
    this.nativeStorage.clear();
    this.rootPage = LoginPage ;
  }
}

