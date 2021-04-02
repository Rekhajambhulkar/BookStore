import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
searchBook:string;
bookName:any;
booksArray = [];
constructor() { }

  ngOnInit(): void {
  }

  search(){
    console.log("Search Book");
    if(this.searchBook == this.bookName){
      return this.ngOnInit();
    }else{
      this.booksArray = this.booksArray.filter(res =>{
        return res.bookName.toLocaleLowerCase.match(this.bookName.toLocaleLowerCase())
      })
    }
  }
}
