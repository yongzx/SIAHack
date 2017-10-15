import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaycompletePage } from './paycomplete';
import { PaidVouchersPage } from '../paidvouchers/paidvouchers';

@NgModule({
  declarations: [
    PaycompletePage,
  ],
  imports: [
    IonicPageModule.forChild(PaidVouchersPage),
  ],
})
export class PaycompletePageModule {}
