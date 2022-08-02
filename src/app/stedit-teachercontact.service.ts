import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class SteditTeachercontactService {

  constructor(private httpClient : HttpClient) { }

  public getContact(id: any){
    return this.httpClient.get('http://localhost:48960/api/TeacherContacts/GetTeacherContact?id='+ id, {headers: headers});
  }

  public getContactByStudentId(id: any){
    return this.httpClient.get('http://localhost:48960/api/TeacherContacts/GetTeacherByStudentId?id='+ id, {headers: headers});
  }
  
  public addContact(data: any){
    return this.httpClient.post('http://localhost:48960/api/TeacherContacts/AddTeacherContact', data, {headers: headers});
  }

  public updateContact(id: any, data: any){
    return this.httpClient.put('http://localhost:48960/api/TeacherContacts/UpdateTeacherContact?id='+ id, data, {headers: headers});
  }

  public deleteContact(id: any){
    return this.httpClient.delete('http://localhost:48960/api/TeacherContacts/DeleteTeacherContact?id='+ id, {headers: headers});
  }
}
