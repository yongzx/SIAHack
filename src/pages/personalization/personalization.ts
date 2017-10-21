import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { VouchersPage } from '../vouchers/vouchers';
import { ShareService } from '../../services/share/share';
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

  personalized_act = {};
  anotherPage = VouchersPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengesPage');
  }

  personalAct() {
    this.shareService.setPreferences(this.personalized_act);
  }

}