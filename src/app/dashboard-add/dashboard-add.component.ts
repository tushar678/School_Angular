import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../school.service';

@Component({
  selector: 'dashboard-add',
  templateUrl: './dashboard-add.component.html',
  styleUrls: ['./dashboard-add.component.css']
})
export class DashboardAddComponent implements OnInit {

  constructor(
    private SchoolService: SchoolService
  ) { }

  addnewschool = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required])
  })

  addschool(){
    console.log("Add School called on ",this.addnewschool.value);
    this.SchoolService.addSchool(this.addnewschool.value).subscribe((data: any)=> {
      console.log("Data Added",data);
    })
    location.reload();
    
  }

  ngOnInit(): void {
  }

}
