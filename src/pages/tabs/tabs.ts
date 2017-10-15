import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedbackPage } from '../feedback/feedback';
import { ExplorePage } from '../explore/explore';
import { VouchersPage } from '../vouchers/vouchers';
import { ChallengesPage } from '../challenges/challenges';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = VouchersPage;
  tab4Root = ChallengesPage;
  tab5Root = FeedbackPage;

  constructor() {

  }
}
