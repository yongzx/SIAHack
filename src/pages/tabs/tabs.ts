import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PersonalizationPage } from '../personalization/personalization';
import { ItineraryPage } from '../itinerary/itinerary';
import { ChallengesPage } from '../challenges/challenges';
import { FeedbackPage } from '../feedback/feedback';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PersonalizationPage;
  tab3Root = ItineraryPage;
  tab4Root = ChallengesPage;
  tab5Root = FeedbackPage;

  constructor() {

  }
}
