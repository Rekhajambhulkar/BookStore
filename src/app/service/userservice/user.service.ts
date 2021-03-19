import { Injectable } from '@angular/core';
import {HttpService} from '../httpservice/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  login(data: any){
    console.log("data", data)
    return this.httpService.post('bookstore_user/login', data)

  }

  registration(data: any){
    return this.httpService.post('bookstore_user/registration', data)
  }
}
