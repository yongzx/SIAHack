import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ScanTicketsPage } from '../scan/scan';
import { ExplorePage } from '../explore/explore';
import { VouchersPage } from '../vouchers/vouchers';
import { ChallengesPage } from '../challenges/challenges';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScanTicketsPage;
  tab3Root = ExplorePage;
  tab4Root = VouchersPage;
  tab5Root = ChallengesPage

  constructor() {

  }
}
