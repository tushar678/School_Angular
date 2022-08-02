import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from 'app/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {

  constructor(
    private ClassService: ClassService,
    private router: Router
    ) { }

  teacherid: any;

  addclass = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    TeacherID : new FormControl()
  }) 

  addnewclass(){
    console.log("Add class called");
    this.addclass.controls['TeacherID'].setValue(this.teacherid);
    console.log("Form data",this.addclass.value);
    this.ClassService.addClass(this.addclass.value).subscribe((data: any)=> {
      console.log("Data Added", data);
    })
    this.router.navigateByUrl('/teacher-edit');
  }

  ngOnInit(): void {
    this.teacherid = localStorage.getItem("editteacherid");
    console.log('retrieved id',this.teacherid);
  }

}
