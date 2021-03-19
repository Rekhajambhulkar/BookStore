import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public token: any;
  BaseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  post = (url: any, data: any) => {
    this.token = localStorage.getItem('token')
    
    console.log(this.BaseUrl)
    return this.http.post(this.BaseUrl + url, data);
  }

  postCart(url: any){
    this.token = localStorage.getItem('token')
    console.log(this.token);
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(this.BaseUrl)
    return this.http.post(this.BaseUrl + url, {}, options);
  }

  get(url: any){
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options)
  }
}
