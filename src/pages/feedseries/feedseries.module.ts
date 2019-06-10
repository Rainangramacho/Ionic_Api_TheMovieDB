import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedSeriesPage } from './feedseries';

@NgModule({
  declarations: [
    FeedSeriesPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedSeriesPage),
  ],
})
export class FeedSeriesPageModule {}
