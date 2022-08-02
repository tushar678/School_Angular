import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentreService } from 'app/centre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'table-list-add',
  templateUrl: './table-list-add.component.html',
  styleUrls: ['./table-list-add.component.css']
})
export class TableListAddComponent implements OnInit {

  constructor(
    private CentreService: CentreService,
    private router: Router
  ) { }

  addnewcentre = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    OpenHour: new FormControl('', [Validators.required]),
    CloseHour: new FormControl('', [Validators.required])
  })

  addcentre(){
    console.log("Centre Details", this.addnewcentre.value);
    this.CentreService.addCentre(this.addnewcentre.value).subscribe((data: any)=> {
      console.log("Data Added", data);
    })
    this.router.navigateByUrl('/table-list');
  }

  ngOnInit(): void {
  }

}
