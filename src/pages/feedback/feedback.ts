import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  feedback = {}
  constructor(public navCtrl: NavController) {
  }

  logForm() {
    console.log(this.feedback);
    alert("Feedback form submitted.");
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}

