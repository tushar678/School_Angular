import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type',  'application/json')
  
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpClient : HttpClient) { }

  public getSchools(){
    return this.httpClient.get('http://localhost:48960/api/Schools/GetSchools', {headers: headers});
  }

  public deleteSchool(id: any){
    return this.httpClient.delete('http://localhost:48960/api/Schools/DeleteSchool?id='+ id, {headers: headers});
  }

  public addSchool(data: any){
    return this.httpClient.post('http://localhost:48960/api/Schools/AddSchool', data, {headers: headers});
  }

  public getSchool(id: any){
    return this.httpClient.get('http://localhost:48960/api/Schools/GetSchool?id='+ id, {headers: headers});
  }

  public updateSchool(id: any, data: any){
    return this.httpClient.put('http://localhost:48960/api/Schools/UpdateSchool?id='+ id, data, {headers: headers});
  }

  public getSchoolByIds(ids: any){
    return this.httpClient.post('http://localhost:48960/api/Schools/GetSchoolByIds', ids, {headers: headers});
  }
}
