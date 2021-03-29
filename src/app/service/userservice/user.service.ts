import { Injectable } from '@angular/core';
import {HttpService} from '../httpservice/http.service'
import {BookService} from '../bookService/book.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService, private bookService:BookService) { }

  login(data: any){
    console.log("data", data)
    return this.httpService.post('bookstore_user/login', data)

  }

  registration(data: any){
    return this.httpService.post('bookstore_user/registration', data)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  adminLogin(data:any){
    return this.httpService.post('bookstore_user/admin/login', data)
  }

  adminregistration(data: any){
    return this.httpService.post('bookstore_user/admin/registration', data)
  }
}
