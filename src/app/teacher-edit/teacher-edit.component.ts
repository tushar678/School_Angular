import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'app/teacher.service';
import { ClassService } from 'app/class.service';

@Component({
  selector: 'teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  constructor(
    private TeacherService : TeacherService,
    private router : Router,
    private ClassService : ClassService
    ) { }

  editschoolid : any;
  editteacherid : any;
  classData : any = [];

  editteacher = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Active: new FormControl(true, [Validators.required]),
    SchoolId: new FormControl()
  })

  editteacherinfo(){
    console.log("Teacher Edit called");
    console.log("Teacher Add called for School Id ",this.editschoolid);
    console.log("form data",this.editteacher.value);
    this.TeacherService.updateTeacher(this.editteacherid, this.editteacher.value).subscribe((data: any)=> {
      console.log("Data Updated");
    })
    this.router.navigateByUrl('/dashboard-edit');
  }
  
  createclassintable(){
    console.log("Create class called");
    this.router.navigateByUrl('/class-add');
  }

  classeditintable(id: any){
    console.log("Class edit called on :",id);
    localStorage.setItem('editclassid',id);
    this.router.navigateByUrl('/class-edit');
  }

  classdeleteintable(id: any){
    console.log("Class delete called on :",id);
    this.ClassService.deleteClass(id).subscribe((data: any)=> {
      console.log("Data deleted",data);
    })
    location.reload();
  }

  ngOnInit(): void {
    this.editschoolid = localStorage.getItem("editschoolid");
    console.log('retrieved school id',this.editschoolid);
    this.editteacherid = localStorage.getItem("editteacherid");
    console.log('retrieved teacher id',this.editteacherid);
    this.TeacherService.getTeacher(this.editteacherid).subscribe((data: any)=> {
      console.log('Teacher Data',data);
      this.editteacher.controls['SchoolId'].setValue(+this.editschoolid);
      this.editteacher.controls['FirstName'].setValue(data.firstName);
      this.editteacher.controls['LastName'].setValue(data.lastName);
      this.editteacher.controls['Active'].setValue(data.active);
    })

    this.ClassService.getClassByTeacherId(+this.editteacherid?this.editteacherid:0).subscribe((data: any)=> {
      console.log("Class Data",data);
      this.classData = data;
    })
  }
}
