import { MoovieProvider } from '../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { FeedSeriesPage } from '../feedseries/feedseries';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  public nome_usuario: string = "Rainan God do código"; //criação de variavel que contem o nome do usuario.
  constructor(public navCtrl: NavController, public navParams: NavParams, private moovieProvider: MoovieProvider) {
  
  }
  
  tab2Root = FeedSeriesPage;
 
  public lista_filmes= new Array<any>(); //um objeto array de qualquer coisa

  ionViewDidLoad() {
    this.moovieProvider.getLatestMovies().subscribe(// fica aguardando o browser retornar a página carregada
      data=>{// se conseguir pegar algum dado, ele cai nesse data e imprime esse dado que pegou
        const response = (data as any);//transformar o retorno do data em um tipo de qualquer coisa
        const objeto_retorno = JSON.parse(response._body);// transformar qualquer coisa em JSON para poder transformar em texto com o Agular
        console.log(objeto_retorno);// printando o json no console do navegador
        
        this.lista_filmes=objeto_retorno.results;// esse results vem do json
      },error =>{
        console.log(error);
      }
    )
  }
  goToHomePage(){
    this.navCtrl.push(HomePage)
  }
}
