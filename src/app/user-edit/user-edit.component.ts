import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private LoginService : LoginService,
    private router : Router
  ) { }

  edituserform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    active: new FormControl(true, [Validators.required])
  })

  edituser(){
    console.log("User Edit called on :",this.edituserform.value);
    var editid = localStorage.getItem("edituserid");
    console.log('retrieved id',editid);
    this.LoginService.updateData(editid, this.edituserform.value).subscribe((data: any)=> {
      console.log("data updated",data);
      this.router.navigateByUrl('/user-profile');
      this.edituserform.reset();
    })
  }

  ngOnInit(): void {
    var editid = localStorage.getItem("edituserid");
    console.log('retrieved id',editid);
    this.LoginService.getUser(editid?+editid:0).subscribe((data: any)=>{
      console.log("Get service data",data);
      this.edituserform.controls['username'].setValue(data.username);
      this.edituserform.controls['password'].setValue(data.password);
      this.edituserform.controls['firstname'].setValue(data.firstname);
      this.edituserform.controls['lastname'].setValue(data.lastname);
      this.edituserform.controls['phone'].setValue(data.phone);
      this.edituserform.controls['email'].setValue(data.email);
      this.edituserform.controls['active'].setValue(data.active);
    })
  }
}
