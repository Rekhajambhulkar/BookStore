import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/userservice/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showPassword = false;
  
constructor(private userService: UserService,
    private route:Router) { }

  ngOnInit(): void { }

  loginUser(data: any){
    let logindata = {
      "email": data.email,
      "password": data.password,
    }
    this.userService.login(logindata).subscribe((res) => {
      console.log("Login successfull ", res['result'].accessToken);   
      localStorage.setItem('token', res['result'].accessToken);  
       
      console.log("Login successfull ", res['result'].accessToken);   
      this.route.navigate(['dashboard/books'])
    },
      (error) => {
        console.log("Failed", error);
      }
    )
  } 

  
} 

  
