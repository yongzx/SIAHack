import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaycompletePage } from './paycomplete';

@NgModule({
  declarations: [
    PaycompletePage,
  ],
  imports: [
    IonicPageModule.forChild(PaycompletePage),
  ],
})
export class PaycompletePageModule {}
