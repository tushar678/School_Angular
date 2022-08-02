import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SteditTeachercontactService } from 'app/stedit-teachercontact.service';

@Component({
  selector: 'st-teacher-add',
  templateUrl: './st-teacher-add.component.html',
  styleUrls: ['./st-teacher-add.component.css']
})
export class StTeacherAddComponent implements OnInit {

  constructor(
    private teacherContactService : SteditTeachercontactService,
    private router : Router
  ) { }

  addnewteacher = new FormGroup({
    StudentId: new FormControl(),
    TeacherFullName: new FormControl('', [Validators.required]),
    UserName: new FormControl('', [Validators.required]),
  })

  addteacher(){
    var editid = localStorage.getItem('editstudentid');
    this.addnewteacher.controls['StudentId'].setValue(editid);
    console.log('Form value',this.addnewteacher.value);
    this.teacherContactService.addContact(this.addnewteacher.value).subscribe((data: any)=> {
      console.log('Teacher Contact Added',data);
    })
    this.router.navigateByUrl('/students-edit');
  }

  ngOnInit(): void {
  }

}
