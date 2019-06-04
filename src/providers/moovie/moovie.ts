import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() // toda classe que tiver esse Injectable, significa que essa classe vai ser injetada em outra classe
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private getApiKey ="156bfc7006a34bca4f14dd393981ad1b";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=156bfc7006a34bca4f14dd393981ad1b&language=pt-BR");//concatenando url do baseAipiPath com o complemento de outra url
  }

}
