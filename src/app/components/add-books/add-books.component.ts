import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../service/bookService/book.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router'
import { DataserviceService } from '../../service/dataservic/dataservice.service';

export class Books{
  constructor(
    public Id: string,
     public bookName: string,
     public author:string, 
     public description:string, 
     public quantity:string, 
     public price:string,
     public discountPrice:string ){}
}

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  booksArray: Books[];
  closeResult: string;
  editForm: FormGroup;
  id: string;
  isAddMode: boolean;
  submitted = false;
  bookId:any;
  collectionSize = 15;
  page = 1;
  pageSize = 4;
  nameSearch:string;
  bookName:any;
  searchValue:any;
  //searchValue:string = '';
  constructor(private dataService:DataserviceService,private router: Router,private bookService: BookService, private modalService: NgbModal, private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
        this.getBooks();
    this.editForm = this.fb.group({
      bookName: [''],
      author: [''],
      description: [''],
      quantity: [''],
      price: [''],
      discountPrice: ['']
    });
    this.dataService.currentMessage.subscribe((msg) => {
      console.log("message", msg);
      this.searchValue = msg;
      this.getBooks();

    })
  }

  addBook(f) {
    //console.log(f);
    console.log(f.value)
    let data = {
      "bookName": f.value.bookName,
      "author": f.value.author,
      "description": f.value.description,
      "quantity": f.value.quantity,
      "price": f.value.price,
      "discountPrice": f.value.discountPrice,
    };
    console.log(data);
    this.bookService.addBook(data).subscribe(res => {
      console.log("Book add", res['result']);
      this.booksArray = res['result'];
      this.getBooks();
    })
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getBooks() {
    this.bookService.getBooks().subscribe(res => {
      console.log("Success", res['result'])
      this.booksArray = res['result'];
      console.log(this.booksArray)
      this.booksArray = this.booksArray;
    },
      error => {
        console.log("Error", error);
      })
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(res => {
      console.log("Deleted successfully", res)
      this.getBooks();
    })
  }

  onSubmit() {
    this.submitted = true;
   // this.updateBook();
  }

  updateBook() {
    console.log(this.editForm.value);
    console.log(this.bookId);
    
    let data = {
      "bookName": this.editForm.value.bookName,
      "author": this.editForm.value.author,
      "description": this.editForm.value.description,
      "quantity": this.editForm.value.quantity,
      "price": this.editForm.value.price,
      "discountPrice": this.editForm.value.discountPrice
    }
    console.log(data)

   this.bookService.updateDetails(this.bookId._id, data).subscribe(res => {
      console.log("Updated successfully", res);
      this.getBooks();

    })
  }

  openEdit(targetModal, book: Books) {
    console.log(book);
    
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      bookName: book.bookName,
      author: book.author,
      description: book.description,
      quantity: book.quantity,
      price: book.price,
      discountPrice: book.discountPrice,
    });
    this.bookId = book;
  }
}