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

  removeCart(id: string){
    return this.httpService.deleteCart('bookstore_user/remove_cart_item/' + id)
  }

  updateCart(id: string , data:any){
    return this.httpService.update('bookstore_user/cart_item_quantity/' + id, data)
  }

  getwishList(){
    return this.httpService.get('bookstore_user/get_wishlist_items')
  }

  postWishList(id: string){
    return this.httpService.postCart('bookstore_user/add_wish_list/' + id)

  }

  remove(id: string){
    return this.httpService.deleteCart('bookstore_user/remove_wishlist_item/' + id)
  }

  orderPlace(data:any){
    return this.httpService.postOrder('bookstore_user/add/order', data)
  }

  addBook(data:any){
    return this.httpService.postOrder('bookstore_user/admin/add/book', data)
  }

  deleteBook(id: string){
    return this.httpService.deleteCart('bookstore_user/admin/delete/book/' + id)
  }

  updateDetails(id: any, data:any){
    return this.httpService.update('bookstore_user/admin/update/book/'+ id, data)
  }
}
