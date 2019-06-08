import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UsersProvider {
  private API_URL_Login = 'http://localhost:5000/api/v1/users/login'
  private API_URL_Register = 'http://localhost:5000/api/v1/users/register'
  private API_URL_ListUsers = 'http://localhost:5000/api/v1/users/userslist'
  private API_URL = 'http://localhost:5000/api/v1/users/'
  
 
  constructor(public http: Http) { }
 
  createAccount(name:string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password,
        name: name
      };
 
      this.http.post(this.API_URL_Register , data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };
 
      this.http.post(this.API_URL_Login , data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  getAll(page: number) {
    return new Promise((resolve, reject) => {
 
      //let url = this.API_URL_ListUsers ;
 
      this.http.get(this.API_URL_ListUsers)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';
 
      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }
 
      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}