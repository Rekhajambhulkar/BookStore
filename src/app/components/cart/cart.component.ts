import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/bookService/book.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  booksArray = [];
  totalItems:number;
  prodId:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.countCart();
  }

  countCart(){
    console.log(this.booksArray);
    this.bookService.getCartItems().subscribe(res =>{
      console.log("Get successfully", res['result'])
      this.booksArray = res['result'];
    this.totalItems = this.booksArray.length;
  })

  }  
  
}
