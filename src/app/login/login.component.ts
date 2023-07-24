import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { AuthenticationServiceService } from '../_services/authentication-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string="";
  password: string="";
  constructor(private router: Router,private Auth : AuthenticationServiceService) { }

  ngOnInit() {
    
  }

  login() : void {
    var LoginModel ={username:this.username,
      password:this.password
    };
    this.Auth.login(LoginModel)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(["dashboard"]);
      },
      error => {
        alert("Invalid credentials");
      });
    //if(this.username == 'admin' && this.password == 'admin'){
     // this.router.navigate(["user"]);
    //}else {
     // alert("Invalid credentials");
   // }
  }
  
}