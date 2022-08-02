import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/student.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(
    private studentService : StudentService,
    private router: Router,
    private datePipe: DatePipe
    ) { }

  studentData : any = [];

  createstudent(){
    console.log("Create Student called");
    this.router.navigateByUrl('/students-add');
  }

  studentedit(id: any){
    console.log("Student edit called on", id);
    localStorage.setItem('editstudentid',id);
    this.router.navigateByUrl('/students-edit');
  }

  studentremove(id: any){
    console.log("Student remove called on", id);
    this.studentService.deleteStudent(id).subscribe((data: any)=> {
      console.log("Record Deleted",data);
    });
    location.reload();
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data: any)=> {
      this.studentData = data;
      console.log('Student Data',this.studentData);
    });
  }

}
