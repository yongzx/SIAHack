import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

/**
 * Generated class for the ChallengesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html',
})
export class ChallengesPage {
  challenges = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengesPage');

  }

  logForm() {
    console.log(this.challenges);
    var challengesCompleted = Object.keys(this.challenges);
    var krisMilesFromChallenges = challengesCompleted.length * 10;
    this.shareService.addMiles(krisMilesFromChallenges);
    console.log(this.shareService.getMiles());
  }
}
