import { MoovieProvider } from '../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedseries',
  templateUrl: 'feedseries.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedSeriesPage {
  public nome_usuario: string = ""; //criação de variavel que contem o nome do usuario.
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moovieProvider: MoovieProvider
     ) {
  }
  
 

  public lista_series= new Array<any>(); //um objeto array de qualquer coisa

  public somaDoisNumeros(num1:number,num2:number): void {
    //alert(num1 + num2 );
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,90);
    //console.log('ionViewDidLoad FeedPage');
    this.moovieProvider.getLatestSeries().subscribe(// fica aguardando o browser retornar a página carregada

      data=>{// se conseguir pegar algum dado, ele cai nesse data e imprime esse dado que pegou

          const response = (data as any);//transformar o retorno do data em um tipo de qualquer coisa
          const objeto_retorno = JSON.parse(response._body);// transformar qualquer coisa em JSON para poder transformar em texto com o Agular
          console.log(objeto_retorno);// printando o json no console do navegador
          
          this.lista_series=objeto_retorno.results;// esse results vem do json

      },error =>{
        console.log(error);
      }
    )

  }
  goToHomePage(){
    this.navCtrl.push(HomePage)
  }
}
