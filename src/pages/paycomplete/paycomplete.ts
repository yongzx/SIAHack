import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaidVouchersPage } from '../paidvouchers/paidvouchers';

/**
 * Generated class for the PaycompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paycomplete',
  templateUrl: 'paycomplete.html',
})
export class PaycompletePage {
  anotherPage = PaidVouchersPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaycompletePage');
  }

}
