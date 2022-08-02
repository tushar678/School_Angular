import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParentsService } from 'app/parents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'parents-add',
  templateUrl: './parents-add.component.html',
  styleUrls: ['./parents-add.component.css']
})
export class ParentsAddComponent implements OnInit {

  constructor(
    private parentsService : ParentsService,
    private router : Router
  ) { }

  addnewparent = new FormGroup({
    StudentId: new FormControl(),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Relation: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    Email: new FormControl('', [Validators.required]),
  })

  addparent(){
    var studentid = localStorage.getItem('editstudentid');
    this.addnewparent.controls['StudentId'].setValue(studentid);
    console.log('Add Parent Called for', this.addnewparent.value);
    this.parentsService.addParent(this.addnewparent.value).subscribe((data: any)=> {
      console.log('Parent Added',data);
    })
    this.router.navigateByUrl('/students-edit');
  }

  ngOnInit(): void {
  }

}
