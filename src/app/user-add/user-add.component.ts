import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(
    private LoginService : LoginService,
    private router : Router
  ) { }

  addnewuser = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    active: new FormControl(true, [Validators.required])
  })

  adduser(){
    console.log("Add user called on : ",this.addnewuser.value);
    this.LoginService.addData(this.addnewuser.value).subscribe((data: any)=> {
      console.log('Data Added',data);
    });
    this.addnewuser.reset();
    this.router.navigateByUrl('/user-profile');
  }

  ngOnInit(): void {
  }

}
