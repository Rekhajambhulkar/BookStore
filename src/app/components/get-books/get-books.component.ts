import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/bookService/book.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})

export class GetBooksComponent implements OnInit {
  count = 0;
  booksArray: any = [];
  books:any = [];
  totalBooks: number;
  product_id: any;
  book:any;
  //addToCart:boolean = false;
  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.bookService.getBooks().subscribe(res => {
      console.log("Success", res)
      this.booksArray = res;
      console.log(this.booksArray)
      this.booksArray = this.booksArray.result;
     this.totalBooks = this.booksArray.length;
    },
      error => {
        console.log("Error", error);
      })
  }

  addCart(book: any) {
    this.books.addedToCart = false;
    for(let b of this.booksArray){
      if(this.books.product_id == b.product_id){
        this.books.addedToCart=true;
      }
    }
    console.log(book);
    this.bookService.addCart(book).subscribe(res => {
      console.log("Success", res)
      this.books = res;
       console.log("book", this.books);
      // this.add();
      this.getCartItems();
    })
  } 

  add(){
    for(let i = 0; i < this.booksArray.length; i++){
      for(let j = 0; j < this.books.length; j++){
        if(this.booksArray[i]._id == this.books[j].product_id._id){
          this.books[j].isAdded = true;
          this.books[j].product_id = this.booksArray[i]._id;
        }
      }
    }
  }

  getCartItems(){
    this.bookService.getCartItems().subscribe(res =>{
      console.log("Get successfully", res)
      let result:any = res['result'];
      this.books = result;
      console.log(this.books);
    })
  }

  // addcartList(){
  //   for(let i = 0; i < this.booksArray.length; i++){
  //     for(let j = 0; j < this.book.length; j++){
  //       if(this.booksArray[i].prodict_id._id == this.book[j]._id){
          
  //       }
  //     }
  //   }
  // }

wishList(book:any){
  console.log(book)
  this.bookService.postWishList(book).subscribe(res =>{
    console.log("Successfully Added", res);
    
  })
}

removeFromWishList(data:any){
  this.bookService.remove(data).subscribe(res =>{

  })
}
}

