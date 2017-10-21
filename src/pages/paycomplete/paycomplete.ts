import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VouchersPage } from '../vouchers/vouchers';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaycompletePage');
  }

  pushpage(){
    console.log("Back to vouchers");
    this.navCtrl.push(VouchersPage);
  }

}
