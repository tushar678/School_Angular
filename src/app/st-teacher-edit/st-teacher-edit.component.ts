import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SteditTeachercontactService } from 'app/stedit-teachercontact.service';

@Component({
  selector: 'st-teacher-edit',
  templateUrl: './st-teacher-edit.component.html',
  styleUrls: ['./st-teacher-edit.component.css']
})
export class StTeacherEditComponent implements OnInit {

  constructor(
    private teacherContactService : SteditTeachercontactService,
    private router : Router
  ) { }

  editnewteacher = new FormGroup({
    TeacherFullName: new FormControl('', [Validators.required]),
    UserName: new FormControl('', [Validators.required]),
    StudentId: new FormControl()
  })

  editteacher(){
    console.log('Form value', this.editnewteacher.value);
    var id = localStorage.getItem('stteacheredit');
    this.teacherContactService.updateContact(id, this.editnewteacher.value).subscribe((data: any)=> {
      console.log('Record Updated',data);
    })
  }

  ngOnInit(): void {
    var id = localStorage.getItem('stteacheredit');
    this.teacherContactService.getContact(id).subscribe((data: any)=> {
      console.log('Retrieved Data',data);
      this.editnewteacher.controls['TeacherFullName'].setValue(data.teacherFullName);
      this.editnewteacher.controls['UserName'].setValue(data.userName);
      this.editnewteacher.controls['StudentId'].setValue(data.studentId);
    })
  }

}
