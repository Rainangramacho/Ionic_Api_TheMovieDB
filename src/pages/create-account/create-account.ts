import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';
import { LoginPage } from '../login/login';
 
@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  model: User;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.name = '';
    this.model.email = '';
    this.model.password = '';
  }
 
  createAccount() {
    this.userProvider.createAccount(this.model.name,this.model.email, this.model.password)
      .then(() => {
        this.toast.create({ message: 'Usuário criado com sucesso.', position: 'botton', duration: 3000 }).present();
        return this.navCtrl.push(LoginPage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
 
export class User {
  email: string;
  password: string;
  name: string;
}