import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { FeedSeriesPage } from '../feedseries/feedseries';

@IonicPage()
@Component({
  selector: 'page-pos-login',
  templateUrl: 'pos-login.html',
})
export class PosLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosLoginPage');
  }
  goToFeedPage(){
    this.navCtrl.push(FeedPage)
  }
  goToFeedSeriesPage(){
    this.navCtrl.push(FeedSeriesPage)
  }
}