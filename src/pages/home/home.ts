import { CreateAccountPage } from "../create-account/create-account";
import { IntroPage } from "./../intro/intro";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FeedPage } from "../feed/feed";
import { FeedSeriesPage } from "../feedseries/feedseries";
import { PosLoginPage } from "../pos-login/pos-login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  goToIntroPage() {
    this.navCtrl.push(IntroPage);
  }
  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  goToCreateAccountPage() {
    this.navCtrl.push(CreateAccountPage);
  }
  goToFeedPage() {
    this.navCtrl.push(FeedPage);
  }
  goToFeedSeriesPage() {
    this.navCtrl.push(FeedSeriesPage);
  }
  goToPosLoginPage() {
    this.navCtrl.push(PosLoginPage);
  }
}