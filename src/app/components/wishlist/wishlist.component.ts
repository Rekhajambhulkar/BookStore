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
  book: any;

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
      let dataShow = [];
      this.booksArray.map(res =>{
        if(res.product_id !== null){
          dataShow.push(res)
        }
     })
     console.log(dataShow);
     this.booksArray.map(res =>{
      res.isCart = false;
      this.booksArray = dataShow;
      this.totalCount = this.booksArray.length;
     })
     console.log(this.booksArray);
    })
  }

  removeBook(id:string){
    
    this.bookService.remove(id).subscribe(res =>{
      console.log("Deleted Successfully",res);
      console.log(this.booksArray);
      this.getwishList();
      this.booksArray.map(res =>{
      if(res.product_id == null){
        this.booksArray.pop();
      }
    });
    })
    }  
}
