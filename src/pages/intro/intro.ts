import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { // serve para navegar entre as paginas 
  }

  goToCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }
}
