import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { window } from 'rxjs-compat/operator/window';

@Component({
  selector: 'dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {

  constructor(
    private SchoolService: SchoolService,
    private router : Router,
    private TeacherService : TeacherService
  ) { }

  teacherData : any = [];
    
  editschoolinfo = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required])
  })

  editschool(){
    console.log("Edit School called on ",this.editschoolinfo.value);
    var editid = localStorage.getItem("editschoolid");
    console.log('retrieved id',editid);
    this.SchoolService.updateSchool(editid, this.editschoolinfo.value).subscribe((data: any)=> {
      console.log("data updated",data);
      location.reload();
      this.editschoolinfo.reset();
    })
  }

  createteacherintable(){
    console.log("create teacher called");
    this.router.navigateByUrl('/teacher-add');
  }

  teachereditintable(id: any){
    console.log("teacher edit called on ",id);
    localStorage.setItem('editteacherid',id);
    this.router.navigateByUrl('/teacher-edit');
  }

  teacherdeleteintable(id: any){
    console.log("teacher delete called on ",id);
    this.TeacherService.deleteTeacher(id).subscribe((data: any)=> {
      console.log("Teacher Deleted",data);
    })
    location.reload();
  }

  ngOnInit(): void {
    var editid = localStorage.getItem("editschoolid");
    console.log('retrieved id',editid);
    this.SchoolService.getSchool(editid?+editid:0).subscribe((data: any)=>{
      console.log("Get service data",data);
      this.editschoolinfo.controls['name'].setValue(data.name);
      this.editschoolinfo.controls['address'].setValue(data.address);
      this.editschoolinfo.controls['city'].setValue(data.city);
      this.editschoolinfo.controls['state'].setValue(data.state);
      this.editschoolinfo.controls['zipCode'].setValue(data.zipCode);
    })
    this.TeacherService.GetTeacherBySchoolId(editid?+editid:0).subscribe((data: any)=>{
      this.teacherData = data;
      console.log("Teachers data",this.teacherData);
    })
  }
}
