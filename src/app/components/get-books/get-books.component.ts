import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../service/bookService/book.service'
import { Router } from '@angular/router'
import { DataserviceService } from '../../service/dataservic/dataservice.service'

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})

export class GetBooksComponent implements OnInit {
  count = 0;
  booksArray: any = [];
  books: any = [];
  totalBooks: number;
  product_id: any;
  book: any;
  searchValue: any;
  bookName: any;
  page = 1;
  pageSize = 4;
  public show: boolean = false;
  isAdded: boolean = false;
  sort = 'Sort By Relevance';

  constructor(private bookService: BookService, private route: Router, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.getBook();
    this.getCartItems();
    this.dataService.currentMessage.subscribe((msg) => {
      console.log("message", msg);
      this.searchValue = msg;
      this.getBook();
    })
  }

  getBook() {
    this.bookService.getBooks().subscribe(res => {
      console.log("Success", res)
      this.booksArray = res;
      console.log(this.booksArray)
      this.booksArray = this.booksArray.result;
      this.totalBooks = this.booksArray.length;
      this.add();
    },
      error => {
        console.log("Error", error);
      })
  }

  addCart(book: any) {
    console.log(book);
    this.bookService.addCart(book).subscribe(res => {
      console.log("Success", res)
      this.books = res;
      console.log("book", this.books);
      this.add();
      this.getCartItems()
    });
  }

  add() {
    for (let i = 0; i < this.booksArray.length; i++) {
      console.log(this.booksArray[i]._id);
      for (let j = 0; j < this.books.length; j++) {
        console.log(this.books[j].product_id);
        if (this.books[j].product_id._id == this.booksArray[i]._id) {
          console.log("Added it");
          this.booksArray[i].isAdded = true;
          this.books[j].productId = this.booksArray[i]._id;
        }
      }
    }
  }

  getCartItems() {
    this.bookService.getCartItems().subscribe(res => {
      console.log("Get successfully", res)
      let result: any = res['result'];
      this.books = result;
      console.log(this.books);
      this.add();
    })
  }

  wishList(book: any) {
    console.log(book)
    this.bookService.postWishList(book).subscribe(res => {
      console.log("Successfully Added", res);
    })
  }

  toggle() {
    this.show = !this.show;
  }

  removeFromWishList(data: any) {
    this.bookService.remove(data).subscribe(res => {
    })
  }

  sortByName() {
    this.sort = 'A-Z';
    this.booksArray.sort((a, b) => a.bookName.localeCompare(b.bookName));
  }

  sortByProperty() {
    this.sort = 'Low-High';
    this.booksArray.sort((a, b) => { return a.price - b.price });
    console.log(this.booksArray.sort((a, b) => { return a.price - b.price }));
  }

  sortByPrice() {
    this.sort = 'High-Low';
    this.booksArray.sort((a, b) => { return b.price - a.price });
  }
}



