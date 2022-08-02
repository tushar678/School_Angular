import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CentreService } from 'app/centre.service';
import { Router } from '@angular/router';
import { SchoolService } from 'app/school.service';
import { CenterschoolService } from 'app/centerschool.service';

@Component({
  selector: 'table-list-edit',
  templateUrl: './table-list-edit.component.html',
  styleUrls: ['./table-list-edit.component.css']
})
export class TableListEditComponent implements OnInit {

  constructor(
    private CentreService : CentreService,
    private router: Router,
    private SchoolService: SchoolService,
    private CenterSchoolService: CenterschoolService
  ) { }

    SchoolData : any =[];
    SpecificData : any ;
    selectedValue: any;
    schoolIds:Array<number> =[];

  editcentre = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    OpenHour: new FormControl('', [Validators.required]),
    CloseHour: new FormControl('', [Validators.required])
  })

  centreschool = new FormGroup({
    CenterId: new FormControl('', [Validators.required]),
    SchoolId: new FormControl('', [Validators.required])
  })

  editcentreinfo(){
    console.log("Centre Details", this.editcentre.value);
    var editcentreid = localStorage.getItem('editcentreid');
    
    console.log("Add School called on school id : ", this.selectedValue, " & center id: ", editcentreid);
    this.centreschool.controls['CenterId'].setValue(editcentreid);
    this.centreschool.controls['SchoolId'].setValue(this.selectedValue);
    console.log("Center School form data", this.centreschool.value);
    // call centre school post service here
    this.CenterSchoolService.addData(this.centreschool.value).subscribe((data: any)=> {
      console.log("ID's added", data);
    });

    this.CentreService.updateCentre(editcentreid, this.editcentre.value).subscribe((data: any)=> {
      console.log("Data Updated",data);
    });
    this.router.navigateByUrl('/table-list');
  }

  dropselect(){
    this.router.navigateByUrl('/dashboard-add');
  }

  centreschoolremove(schoolid: any){
    console.log("Centre School Remove called on school id ", schoolid);
    var centreid = localStorage.getItem('editcentreid');
    this.CenterSchoolService.deleteData(schoolid, centreid).subscribe((data: any)=> {
      console.log("Data Deleted",data);
    })
    location.reload();
  }

  ngOnInit(): void {
    var id = localStorage.getItem('editcentreid');
    this.CentreService.getCentre(+id).subscribe((data: any)=> {
      console.log("Centrer Retrieved data",data);
      this.editcentre.controls['Name'].setValue(data.name);
      this.editcentre.controls['OpenHour'].setValue(data.openHour);
      this.editcentre.controls['CloseHour'].setValue(data.closeHour);
    });

    this.CenterSchoolService.getByCenterId(id).subscribe((data: any)=> {
      data.forEach(element => {
       this.schoolIds.push(element.schoolId); 
      });
      console.log("schoolIDs",this.schoolIds);

      // fetch data from get school for multiple school id
      this.SchoolService.getSchoolByIds(this.schoolIds).subscribe((data: any)=> {
        this.SpecificData = data;
        console.log("Specific Data",this.SpecificData);
      });
    });

    // complete school table lists fetched :-
    this.SchoolService.getSchools().subscribe((data: any) => {
      this.SchoolData = data;
      console.log("School Data",this.SchoolData);
    });
  }

}
