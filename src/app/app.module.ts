import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { FeedbackPage } from '../pages/feedback/feedback';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { VouchersPage } from '../pages/vouchers/vouchers';
import { HomePage } from '../pages/home/home';
import { ChallengesPage } from '../pages/challenges/challenges';
import { TabsPage } from '../pages/tabs/tabs';
import { PaymentPage } from '../pages/payment/payment';
import { PaycompletePage } from '../pages/paycomplete/paycomplete';
import { PaidVouchersPage } from '../pages/paidvouchers/paidvouchers';
import { PersonalizationPage} from '../pages/personalization/personalization';
import {GmapviewPage} from '../pages/gmapview/gmapview';

import { ShareService } from '../services/share/share';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItineraryPage,
    VouchersPage,
    TabsPage,
    FeedbackPage, 
    ChallengesPage,
    PaymentPage,
    PaycompletePage,
    PaidVouchersPage,
    PersonalizationPage,
    GmapviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    NgxQRCodeModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItineraryPage,
    VouchersPage,
    HomePage,
    TabsPage,
    FeedbackPage,
    ChallengesPage,
    PaymentPage,
    PaycompletePage,
    PaidVouchersPage,
    PersonalizationPage,
    GmapviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ShareService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
