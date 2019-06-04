import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


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
}
