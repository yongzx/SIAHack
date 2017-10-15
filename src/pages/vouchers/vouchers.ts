import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-vouchers',
  templateUrl: 'vouchers.html'
})
export class VouchersPage {

  anotherPage = PaymentPage;

  constructor(public navCtrl: NavController) {

  }

}
