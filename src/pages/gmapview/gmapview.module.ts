import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GmapviewPage } from './gmapview';

@NgModule({
  declarations: [
    GmapviewPage,
  ],
  imports: [
    IonicPageModule.forChild(GmapviewPage),
  ],
})
export class GmapviewPageModule {}
