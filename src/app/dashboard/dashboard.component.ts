import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private SchoolService : SchoolService,
    private router : Router
  ) { }
  schoolData: any = [];

  createschoolintable(){
    console.log("Create school method");
    this.router.navigateByUrl('/dashboard-add');
  }

  schooleditintable(id: any){
    console.log("School edit called on : ",id);
    localStorage.setItem('editschoolid',id);
    this.router.navigateByUrl('/dashboard-edit');
  }

  schooldeleteintable(id: any){
    console.log("School delete called on",id);
    this.SchoolService.deleteSchool(id).subscribe((data: any)=> {
      console.log("Record Deleted", data);
    });
    location.reload();
  }

  ngOnInit() {
    this.SchoolService.getSchools().subscribe((data: any)=> {
      console.log('Schools data',data);
      this.schoolData = data;
    })

    window.onunload = function () {
      localStorage.clear();
    };
  }

}
