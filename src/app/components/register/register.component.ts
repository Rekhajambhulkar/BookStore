import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../service/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private userService: UserService) {
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
  this.userService.registration(data).subscribe(res =>{
    console.log("Success", res)
  },
  error =>{
    console.log("Error", error)
  })

  }
}
