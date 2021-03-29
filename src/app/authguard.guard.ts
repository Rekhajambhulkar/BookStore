import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {UserService} from './service/userservice/user.service'
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){}

  canActivate(): boolean {  
    if (!this.userService.loggedIn()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.userService.loggedIn();  
}
  
}
