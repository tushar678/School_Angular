import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  public getStudents(){
    return this.httpClient.get('http://localhost:48960/api/Students/GetStudents', {headers: headers});
  }
  
  public addStudent(data: any){
    return this.httpClient.post('http://localhost:48960/api/Students/AddStudent', data, {headers: headers});
  }

  public deleteStudent(id: any){
    return this.httpClient.delete('http://localhost:48960/api/Students/DeleteStudent?id=' + id, { headers: headers });
  }

  public getStudent(id: any){
    return this.httpClient.get('http://localhost:48960/api/Students/GetStudent?id=' + id, {headers: headers});
  }

  public updateStudent(id: any, data: any){
    return this.httpClient.put('http://localhost:48960/api/Students/UpdateStudent?id=' + id, data, {headers: headers});
  }
}
