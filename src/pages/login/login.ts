import { PosLoginPage } from "./../pos-login/pos-login";
import { UsersProvider } from "./../../providers/users/users";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { IntroPage } from "../intro/intro";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = "";
    this.model.password = "";
  }
  
  goToIntroPage() {
    this.navCtrl.push(IntroPage);
  }

  login() {
    this.userProvider.login(this.model.email, this.model.password)
      .then(() => {
        this.toast.create({ message: "Usuário logado com sucesso!", position: "botton", duration: 3000 }).present();
        return this.navCtrl.push(PosLoginPage);
      })
      .catch((error: any) => {
        this.toast.create({ message: "Erro ao efetuar login. Erro: " + error.error, position: "botton", duration: 3000 }).present();
      });
  }
}

export class User {
  email: string;
  password: string;
}