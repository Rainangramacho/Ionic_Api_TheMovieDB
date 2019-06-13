import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable() // toda classe que tiver esse Injectable, significa que essa classe vai ser injetada em outra classe
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private getApiKey ="156bfc7006a34bca4f14dd393981ad1b";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
  getLatestMovies(){
    return this.http.get(this.baseApiPath + `/movie/popular?api_key=${this.getApiKey}&language=pt-BR`);
  }
  getLatestSeries(){
    return this.http.get(this.baseApiPath + `/tv/popular?api_key=${this.getApiKey}&language=pt-BR`);
  }
}
