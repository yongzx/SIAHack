import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { VouchersPage } from '../vouchers/vouchers';
import { ItineraryPage } from '../itinerary/itinerary';
import { ChallengesPage } from '../challenges/challenges';
import { FeedbackPage } from '../feedback/feedback';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VouchersPage;
  tab3Root = ItineraryPage;
  tab4Root = ChallengesPage;
  tab5Root = FeedbackPage;

  constructor() {

  }
}
