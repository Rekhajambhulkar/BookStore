import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/userservice/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showPassword = false;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  adminLogin(data: any){
    let logindata = {
      "email": data.email,
      "password": data.password,
    }
    this.userService.adminLogin(logindata).subscribe((res) => {
      console.log("Login successfull ", res['result'].accessToken);   
      localStorage.setItem('token', res['result'].accessToken);   
      this.route.navigate(['admindashboard/book'])
    },
      (error) => {
        console.log("Failed", error);
      }
    )
  } 
}
