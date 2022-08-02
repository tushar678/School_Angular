import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentreService } from 'app/centre.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(
    private router : Router,
    private CentreService : CentreService
    ) { }

  centreData : any = [];  

  createcentreintable(){
    console.log("create centre called");
    this.router.navigateByUrl('/table-list-add');
  }

  centreeditintable(id: any){
    console.log("centre edit called on ",id);
    localStorage.setItem('editcentreid',id);
    this.router.navigateByUrl('/table-list-edit');
  }

  centredeleteintable(id: any){
    console.log("centre delete called on ",id);
    this.CentreService.deleteCentre(id).subscribe((data: any)=> {
      console.log("Data Deleted",data);
    });
    location.reload();
  }

  ngOnInit() {
    this.CentreService.getCentres().subscribe((data: any)=> {
      this.centreData = data;
      console.log("Centres Data",this.centreData);
    })
  }

}
