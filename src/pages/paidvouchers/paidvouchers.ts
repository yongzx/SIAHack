import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-paidvouchers',
  templateUrl: 'paidvouchers.html'
})
export class PaidVouchersPage {

  anotherPage = PaymentPage;

  constructor(public navCtrl: NavController) {

  }
}
