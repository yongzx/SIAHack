import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChallengesPage } from './challenges';

@NgModule({
  declarations: [
    ChallengesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengesPage),
  ],
})
export class ChallengesPageModule {}
