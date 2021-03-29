import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/bookService/book.service'
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  booksArray = [];
  totalCount:any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getwishList();
  }

  getwishList(){
    this.bookService.getwishList().subscribe(res =>{
      console.log("Get successfully", res['result'])
      console.log("Success", res)
      this.booksArray = res['result'];
      console.log(this.booksArray)
      this.booksArray = this.booksArray;
      this.totalCount = this.booksArray.length;
    })
  }

  removeBook(id:string){
    this.bookService.remove(id).subscribe(res =>{
      console.log("Deleted Successfully",res);
      console.log(this.booksArray);
      this.getwishList();
    })
  }
}
