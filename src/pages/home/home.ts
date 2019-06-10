import { CreateAccountPage } from '../create-account/create-account';
import { UserListPage } from './../user-list/user-list';
import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FeedPage } from '../feed/feed';
import { FeedSeriesPage } from '../feedseries/feedseries';
import { PosLoginPage } from '../pos-login/pos-login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToIntroPage(){
    this.navCtrl.push(IntroPage)
}
goToLoginPage(){
  this.navCtrl.push(LoginPage)
}
goToUsersListPage(){
  this.navCtrl.push(UserListPage)
}
goToCreateAccountPage(){
  this.navCtrl.push(CreateAccountPage)
}
goToFeedPage(){
  this.navCtrl.push(FeedPage)
}
goToFeedSeriesPage(){
  this.navCtrl.push(FeedSeriesPage)
}
goToPosLoginPage(){ // só pra testar se da pra ir pra pagina de pos login numa boa
  this.navCtrl.push(PosLoginPage)
}
}

