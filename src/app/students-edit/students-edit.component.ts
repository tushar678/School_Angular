import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from 'app/school.service';
import { TutoringGroupService } from 'app/tutoring-group.service';
import { StudentService } from 'app/student.service';
import { Router } from '@angular/router';
import { ParentsService } from 'app/parents.service';
import { SteditTeachercontactService } from 'app/stedit-teachercontact.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  constructor(
    private schoolService : SchoolService,
    private tutoringGroupService : TutoringGroupService,
    private studentService : StudentService,
    private parentService : ParentsService,
    private router : Router,
    private teacherContactService : SteditTeachercontactService,
    private datePipe : DatePipe
  ) { }

  grades: any = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  mentors: any = ['A','B','C'];
  schoolData: any =[];
  parentData: any =[];
  teacherContactData: any =[];
  tutoringGroupData: any=[];
  gender: any = ['Male','Female','Others'];
  selectedFile: any;

  editstudent = new FormGroup({
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
  
  edit(){
    console.log('Edit called');
    console.log('Form Data',this.editstudent.value);
    var editid = localStorage.getItem('editstudentid');
    this.studentService.updateStudent(editid, this.editstudent.value).subscribe((data: any)=> {
      console.log('Record Updated',data);
    })
    this.router.navigateByUrl('/students');
  }

  parentadd(){
    console.log('Parent Add Clicked');
    this.router.navigateByUrl('/parents-add');
  }

  parentremove(id: any){
    console.log('Parent Remove called on',id);
    this.parentService.deleteParent(id).subscribe((data: any)=> {
      console.log('Parent Deeted',data);
    })
    this.router.navigateByUrl('/students');
  }

  createteacher(){
    console.log('Teacher Add Called');
    this.router.navigateByUrl('st-teacher-add');
  }

  teacheredit(id: any){
    console.log('Teacher Edit called on ',id);
    localStorage.setItem('stteacheredit',id);
    this.router.navigateByUrl('st-teacher-edit');
  }

  teacherdelete(id: any){
    console.log('Teacher Delete called on ',id);
    this.teacherContactService.deleteContact(+id).subscribe((data: any)=> {
      console.log('Teacher Contact Deleted',data);
    })
    location.reload();
  }

    onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log('Selected File',this.selectedFile);
    this.getBase64(this.selectedFile).then(data => {
      console.log('Bit 64 File',data);
      this.editstudent.controls['PicFilename'].setValue(data);
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

    var editid = localStorage.getItem('editstudentid');
    this.studentService.getStudent(+editid).subscribe((data: any)=> {
      console.log('Student Retrieved',data);
      this.editstudent.controls['StudentId'].setValue(data.studentId);
      this.editstudent.controls['CurrentGrade'].setValue(data.currentGrade);
      this.editstudent.controls['Mentor'].setValue(data.mentor);
      this.editstudent.controls['SchoolId'].setValue(data.schoolId);
      this.editstudent.controls['FirstName'].setValue(data.firstName);
      this.editstudent.controls['MiddleName'].setValue(data.middleName);
      this.editstudent.controls['LastName'].setValue(data.lastName);
      this.editstudent.controls['AllowedToWalkHome'].setValue(data.allowedToWalkHome);

      // dob format change
      var date = this.datePipe.transform(data.dob,"yyyy-MM-dd");
      this.editstudent.controls['DOB'].setValue(date);
      console.log('Converted Date',date);

      this.editstudent.controls['Age'].setValue(data.age);
      this.editstudent.controls['Gender'].setValue(data.gender);
      this.editstudent.controls['StudentInProbation'].setValue(data.studentInProbation);
      this.editstudent.controls['Address'].setValue(data.address);
      this.editstudent.controls['City'].setValue(data.city);
      this.editstudent.controls['State'].setValue(data.state);
      this.editstudent.controls['ZipCode'].setValue(data.zipCode);
      this.editstudent.controls['Phone'].setValue(data.phone);
      this.editstudent.controls['Email'].setValue(data.email);
      this.editstudent.controls['IEP'].setValue(data.iep);
      this.editstudent.controls['Field504'].setValue(data.field504);
      this.editstudent.controls['Reteined'].setValue(data.reteined);
      this.editstudent.controls['ReteinedReason'].setValue(data.reteinedReason);
      this.editstudent.controls['Language'].setValue(data.language);
      this.editstudent.controls['TutoringGroupId'].setValue(data.tutoringGroupId);
      this.editstudent.controls['PicFilename'].setValue(data.picFilename);
    })

    this.parentService.getParent(+editid).subscribe((data: any)=> {
      this.parentData = data;
      console.log('Parent Data',data);
    })

    this.teacherContactService.getContactByStudentId(+editid).subscribe((data: any)=> {
      this.teacherContactData = data;
      console.log('Teacher Contact Data',data);
    })
  }
}
