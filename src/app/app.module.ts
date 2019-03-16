import { GunganYatraPage } from './../pages/gungan-yatra/gungan-yatra';
import { PlaceToVisitPage } from './../pages/place-to-visit/place-to-visit';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MainPage } from '../pages/main/main';
import { TemplePage } from '../pages/temple/temple';
import { TempleProgramPage } from '../pages/temple-program/temple-program';
import { DownloadsPage } from '../pages/downloads/downloads';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { GelleryPage } from '../pages/gellery/gellery';

import { HttpModule } from '@angular/http';
import { AartiPage } from '../pages/aarti/aarti';
import { BhajanAudioPage } from '../pages/bhajan-audio/bhajan-audio';
import { BhajanBookPage } from '../pages/bhajan-book/bhajan-book';
import { BhajanVideoPage } from '../pages/bhajan-video/bhajan-video';
import { ChalishaPage } from '../pages/chalisha/chalisha';
import { DurgaKavachPage } from '../pages/durga-kavach/durga-kavach';
import { GoshalaPhotoPage } from '../pages/goshala-photo/goshala-photo';
import { JeevanParichayPage } from '../pages/jeevan-parichay/jeevan-parichay';
import { KundPhotoPage } from '../pages/kund-photo/kund-photo';
import { MangalPathPage } from '../pages/mangal-path/mangal-path';
import { MatajiPhotoPage } from '../pages/mataji-photo/mataji-photo';
import { PanchangPage } from '../pages/panchang/panchang';
import { ShakambariMahamantraPage } from '../pages/shakambari-mahamantra/shakambari-mahamantra';
import { TemplePhotoPage } from '../pages/temple-photo/temple-photo';
import { UniquePhotoPage } from '../pages/unique-photo/unique-photo';

import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HTTP} from '@ionic-native/http'
import { TempleHistoryPage } from '../pages/temple-history/temple-history';
import { MatajiHistoryPage } from '../pages/mataji-history/mataji-history';
import { AboutMahantjiPage } from '../pages/about-mahantji/about-mahantji';
import { HowToReachPage } from '../pages/how-to-reach/how-to-reach';
import { MatajiPoshakSizePage } from '../pages/mataji-poshak-size/mataji-poshak-size';
import { LocalTransportPage } from '../pages/local-transport/local-transport';
import { DharamshalaPage } from '../pages/dharamshala/dharamshala';
import { EventsPage } from '../pages/events/events';
import { ListOfProgramPage } from '../pages/list-of-program/list-of-program';
import { AartiTimePage } from '../pages/aarti-time/aarti-time';
import { AudioPage } from '../pages/audio/audio';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Toast } from '@ionic-native/toast';

import { NativeStorage } from '@ionic-native/native-storage';
import { PtvDetailsPage } from '../pages/ptv-details/ptv-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage ,
    RegisterPage ,
    MainPage ,
    TemplePage ,
    TempleProgramPage ,
    DownloadsPage ,
    ContactUsPage,
    GelleryPage ,
    AartiPage,
    BhajanAudioPage,
    BhajanBookPage,
    BhajanVideoPage,
    ChalishaPage,
    DurgaKavachPage,
    GoshalaPhotoPage,
    JeevanParichayPage,
    KundPhotoPage,
    MangalPathPage,
    MatajiPhotoPage,
    PanchangPage,
    ShakambariMahamantraPage,
    TemplePhotoPage,
    UniquePhotoPage,
    TempleHistoryPage,
    MatajiHistoryPage,
    AboutMahantjiPage,
    HowToReachPage,
    MatajiPoshakSizePage,
    LocalTransportPage,
    DharamshalaPage,
    EventsPage,
    AartiTimePage,
    ListOfProgramPage ,
    AudioPage,
    PlaceToVisitPage,
    GunganYatraPage,
    PtvDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage ,
    LoginPage,
    RegisterPage,
    MainPage ,
    TemplePage,
    TempleProgramPage ,
    DownloadsPage ,
    ContactUsPage,
    GelleryPage,
    AartiPage,
    BhajanAudioPage,
    BhajanBookPage,
    BhajanVideoPage,
    ChalishaPage,
    DurgaKavachPage,
    GoshalaPhotoPage,
    JeevanParichayPage,
    KundPhotoPage,
    MangalPathPage,
    MatajiPhotoPage,
    PanchangPage,
    ShakambariMahamantraPage,
    TemplePhotoPage,
    UniquePhotoPage,
    TempleHistoryPage,
    MatajiHistoryPage,
    AboutMahantjiPage,
    HowToReachPage,
    MatajiPoshakSizePage,
    LocalTransportPage,
    DharamshalaPage,
    EventsPage,
    AartiTimePage,
    ListOfProgramPage ,
    AudioPage,
    PlaceToVisitPage,
    GunganYatraPage ,
    PtvDetailsPage ,
  ],
  providers: [
    HTTP,
    Firebase,
    SplashScreen,
    File,
    FileTransfer ,
    AndroidPermissions,
    Diagnostic,
    Toast,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
