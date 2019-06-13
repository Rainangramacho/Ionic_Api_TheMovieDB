import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UsersProvider {
  private API_URL = "http://localhost:5000/api/v1/users/";
  private API_URL_Login = `${this.API_URL}login`;
  private API_URL_Register = `${this.API_URL}register`;
  
  constructor(public http: Http) {}

  createAccount(name: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password,
        name: name
      };

      this.http.post(this.API_URL_Register, data).subscribe(
        (result: any) => {
          resolve(result.json());
        },
        error => {
          reject(error.json());
        }
      );
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL_Login, data).subscribe(
        (result: any) => {
          resolve(result.json());
        },
        error => {
          reject(error.json());
        }
      );
    });
  }
}