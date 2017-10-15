import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VouchersPage } from '../vouchers/vouchers';

/**
 * Generated class for the ChallengesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-personalization',
  templateUrl: 'personalization.html'
})
export class PersonalizationPage {
  anotherPage = VouchersPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
