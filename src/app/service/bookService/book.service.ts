import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {HttpService} from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getBooks(){
    return this.httpService.get('bookstore_user/get/book')
  }

  addCart( id: string){
    return this.httpService.postCart('bookstore_user/add_cart_item/' + id)
  }

  getCartItems(){
    return this.httpService.get('bookstore_user/get_cart_items')
  }
}
