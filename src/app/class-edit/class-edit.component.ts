import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from 'app/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  constructor(
    private ClassService : ClassService,
    private router : Router
  ) { }

  editclass = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    TeacherID : new FormControl()
  }) 

  editclassinfo(){
    console.log("Edit class called");
    var teacherId = localStorage.getItem('editteacherid');
    this.editclass.controls['TeacherID'].setValue(teacherId);
    var classid = localStorage.getItem('editclassid');
    console.log("Form data",this.editclass.value," on class id ",classid);
    this.ClassService.updateClass(classid, this.editclass.value).subscribe((data: any)=> {
      console.log('Data Updated',data);
    })
    this.router.navigateByUrl('/teacher-edit');
  }

  ngOnInit(): void {
    var classid = localStorage.getItem('editclassid');
    console.log("Class edit id : ",classid);
    this.ClassService.getClass(+classid?classid:0).subscribe((data: any)=> {
      console.log("Class fetched data",data);
      this.editclass.controls['Name'].setValue(data.name);
    })
  }

}
