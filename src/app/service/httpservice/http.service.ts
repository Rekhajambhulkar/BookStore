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
    console.log(this.token);
    
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

  postOrder(url: any, data:any){
    this.token = localStorage.getItem('token')
    console.log(this.token);
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(this.BaseUrl)
    return this.http.post(this.BaseUrl + url, data, options);
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

  deleteCart(url: any){
    this.token = localStorage.getItem('token')
    console.log(this.token);
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(this.BaseUrl)
    return this.http.delete(this.BaseUrl + url, options);
  }

  update(url:any, data:any){
    this.token = localStorage.getItem('token')
   // console.log(this.token);
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(this.BaseUrl)
    return this.http.put(this.BaseUrl + url, data, options)
  }

  updateBook(url:any){
    this.token = localStorage.getItem('token')
   // console.log(this.token);
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(this.BaseUrl)
    return this.http.put(this.BaseUrl + url,{}, options)
  }
}
