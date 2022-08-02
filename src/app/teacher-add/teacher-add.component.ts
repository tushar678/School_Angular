import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  constructor(
    private TeacherService : TeacherService,
    private router : Router
    ) { }

  editid : any;

  addnewteacher = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    SchoolId: new FormControl(),
    Active: new FormControl(true, [Validators.required])
  })

  addteacher(){
    this.addnewteacher.controls['SchoolId'].setValue(+this.editid);
    console.log("Teacher Add called for School Id ",this.editid);
    console.log("form data",this.addnewteacher.value);
    this.TeacherService.addTeacher(this.addnewteacher.value).subscribe((data: any)=> {
      console.log("Teacher added",data);
    },
    (error: any)=> {
      console.log(error);
    })
    this.router.navigateByUrl('/dashboard-edit');
  }

  ngOnInit(): void {
    this.editid = localStorage.getItem("editschoolid");
    console.log('retrieved id',this.editid);
  }

}
