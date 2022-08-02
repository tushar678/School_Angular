import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginService } from '../login.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  login(){
    console.log("Login details entered are :- ",this.loginform.value);
    this.LoginService.login(this.loginform.value).subscribe(data => {
      console.log("Login result",data);
      if(data == true){
        console.log("Logged in successfully");
        this.router.navigateByUrl('dashboard');
      }
      else {
        alert("Invalid Credentials or Access Denied");
        this.loginform.reset();
      }
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private LoginService : LoginService,
    private LocationStrategy : LocationStrategy 
  ) {
    history.pushState(null, null, window.location.href);
    this.LocationStrategy.onPopState(() => {
    history.pushState(null, null, window.location.href);
  });
  }

  ngOnInit(): void {
  }
}
