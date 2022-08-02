import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from 'app/school.service';
import { Router } from '@angular/router';
import { TutoringGroupService } from 'app/tutoring-group.service';
import { StudentService } from 'app/student.service';
import { file } from 'googleapis/build/src/apis/file';

@Component({
  selector: 'students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {

  constructor(
    private schoolService : SchoolService,
    private router : Router,
    private tutoringGroupService : TutoringGroupService,
    private studentService : StudentService
    ) { }

  grades: any = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  mentors: any = ['A','B','C'];
  schoolData: any =[];
  tutoringGroupData: any=[];
  gender: any = ['Male','Female','Others'];
  selectedFile: File;

  addnew(){
    console.log('Add student called');
    console.log('Form value',this.addstudent.value);
    this.studentService.addStudent(this.addstudent.value).subscribe((data: any)=>{
      console.log("Data Added",data);
    })
    this.addstudent.reset();
    this.router.navigateByUrl('/students');
  }

  addstudent = new FormGroup({
    StudentId: new FormControl('', [Validators.required]),
    CurrentGrade: new FormControl('', [Validators.required]),
    Mentor: new FormControl('', [Validators.required]),
    SchoolId: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required]),
    MiddleName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    AllowedToWalkHome: new FormControl(false, [Validators.required]),
    DOB: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required]),
    Gender: new FormControl('',[Validators.required]),
    StudentInProbation: new FormControl(false, [Validators.required]),
    Address: new FormControl('',[Validators.required]),
    City: new FormControl('',[Validators.required]),
    State: new FormControl('',[Validators.required]),
    ZipCode: new FormControl('',[Validators.required]),
    Phone: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    IEP: new FormControl(false,[Validators.required]),
    Field504: new FormControl(false,[Validators.required]),
    Reteined: new FormControl(false,[Validators.required]),
    ReteinedReason: new FormControl('',[Validators.required]),
    Language: new FormControl('',[Validators.required]),
    TutoringGroupId: new FormControl('',[Validators.required]),
    PicFilename: new FormControl(File,[Validators.required]),
  })

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log('Selected File',this.selectedFile);
    this.getBase64(this.selectedFile).then(data => {
      console.log('Bit 64 File',data);
      this.addstudent.controls['PicFilename'].setValue(data);
    });
  }

  getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  ngOnInit(): void {
    this.schoolService.getSchools().subscribe((data: any)=> {
      this.schoolData = data;
      console.log('School service',this.schoolData);
    })
    this.tutoringGroupService.getTutoringGroups().subscribe((data: any)=> {
      this.tutoringGroupData = data;
      console.log("Tutoring Groups Data",this.tutoringGroupData);
    })
  }
}
