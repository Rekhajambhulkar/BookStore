import { Component, OnInit} from '@angular/core';
import {DataserviceService} from '../../service/dataservic/dataservice.service'
import {BookService} from '../../service/bookService/book.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
searchValue:any;
bookName:any;
booksArray = [];
cartArray = [];
length:number;
show:boolean = false;
value:boolean = false;
constructor(private dataService: DataserviceService, private bookService: BookService) { }
  ngOnInit(): void {
   this.dataService.currentMessage.subscribe(message =>{
     console.log("Received msg:" + message);
     this.displayCartItems();
   })
  }

  search(event:any) {
    console.log(event.target.value);
    let values = event.target.value;
    this.dataService.changeMessage(values);
  }

    displayCartItems(){
    this.bookService.getCartItems().subscribe(res =>{
      console.log(res['result']);
      this.cartArray = res['result']
      this.length = this.cartArray.length;
      console.log("Length is:" + this.length);
    })
  }
}
