import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { enableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  constructor(
    private LoginService : LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  userData: any = [];
  access : any = 'disabled';

  usereditintable(id: any){
    console.log("User edit called on : ",id);
    localStorage.setItem('edituserid',id);
    this.router.navigateByUrl('/user-edit');
  }

  userdeleteintable(id: any){
    console.log("User delete called on : ",id);
    this.LoginService.deleteUser(id).subscribe((data: any)=> {
      console.log("User deleted",data);
      location.reload();
    })
  }

  createuserintable(){
    console.log("Create User called");
    this.router.navigateByUrl('/user-add');
  }

  ngOnInit() {
    this.LoginService.getUsers().subscribe((data: any) =>{
      this.userData = data;
      console.log('User Data',data);
    })
  }
}
