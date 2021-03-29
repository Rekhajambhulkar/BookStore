import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../service/userservice/user.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.email, Validators.pattern('^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      mobilenumber:['',[Validators.pattern("^[6-9]{1}[0-9]{9}$"),Validators.required]]
    }
    )
    }

  ngOnInit(): void {
  }

  signUp = (formValues: any) =>{
    let data = {
      "fullName": formValues.fullname,
      "email": formValues.email,
      "password": formValues.password,
      "phone": formValues.mobilenumber 
  }
  this.userService.adminregistration(data).subscribe(res =>{
    console.log("Success", res)
    this.router.navigate(['admindashboadard/adminLogin'])
  },
  error =>{
    console.log("Error", error)
  })

  }
}
