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
  book = [];
  totalBooks: number;
  product_id: any;
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

  addCart(data: any) {
    console.log(data);
    this.bookService.addCart(data).subscribe(res => {
      console.log("Success", res)
      
    })
  }

  getCartItems(){
    this.bookService.getCartItems().subscribe(res =>{
      console.log("Get successfully", res)
    })
  }
}

