import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BookService } from '../../service/bookService/book.service'
import { UserService } from '../../service/userservice/user.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  isShow = false;
  show = false;
  booksArray = [];
  totalItems: number;
  count: any;
  book: any;

  constructor(private bookService: BookService, private userService: UserService, private route:Router) { }

  ngOnInit(): void {
    this.getCart();
    //this.totalItem.emit(this.totalItems);
  }

  getCart() {
    this.bookService.getCartItems().subscribe(res => {
      console.log("Get successfully", res['result'])
      console.log("Success", res)
      this.booksArray = res['result'];
      console.log(this.booksArray)
      this.booksArray = this.booksArray;
      this.totalItems = this.booksArray.length;
    })
  }

  removeItems(id: string) {
    this.bookService.removeCart(id).subscribe(res => {
      console.log("Success", res)
      console.log(this.booksArray);
      this.getCart();
      this.booksArray.map(res =>{
        if(res.product_id == null){
          this.booksArray.pop();
        }
      });
    })
  }

  increaseItemCount(book: any) {
    if (book.quantityToBuy > book.product_id.quantity) {
      console.log('you cannot make quantity more than')
    }
    console.log(book.product_id.quantity)
    book.quantityToBuy = book.product_id.quantity + 1;
    this.updateCartQuantity(book);

  }

  decreaseItemCount(book) {
    console.log(book.product_id.quantity)
    book.quantityToBuy = book.product_id.quantity - 1;
    this.updateCartQuantity(book);
  }

  updateCartQuantity(book) {
    //console.log("Books", this.count)
    let quantityToBuy = {
      "quantityToBuy": book.quantityToBuy,
    }
    this.bookService.updateCart(book._id, quantityToBuy).subscribe(res => {
      console.log("Success", 'quantity increased', res);
    })
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  toggleDisplay1() {
    this.show = !this.show;
  }

  orderPlace(book) {
       
            let orders =
    {

    "orders":[
      {
      "product_id": book.product_id._id,
      "product_name": book.product_id.bookName,
      "product_quantity": book.quantityToBuy,
      "product_price": book.product_id.price
      }
    ]
  }   
   console.log(book);

    this.bookService.orderPlace(orders).subscribe(res => {
   console.log("Success", res);
   this.route.navigate(['dashboard/orderSuccess'])
      })
  }
}
