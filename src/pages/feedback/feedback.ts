import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  feedback = {}
  miles: number; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService) {
    this.miles = this.shareService.getMiles();
  }

  logForm() {
    console.log(this.feedback);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);

  } 

}

