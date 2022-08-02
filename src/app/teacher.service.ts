import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  public GetTeacherBySchoolId(id: any) {
    return this.httpClient.get('http://localhost:48960/api/Teachers/GetTeacherBySchoolId?id=' + id, { headers: headers });
  }

  public addTeacher(data: any) {
    return this.httpClient.post('http://localhost:48960/api/Teachers/AddTeacher', data, { headers: headers });
  }

  public deleteTeacher(id: any) {
    return this.httpClient.delete('http://localhost:48960/api/Teachers/DeleteTeacher?id=' + id, { headers: headers });
  }

  public getTeacher(id: any){
    return this.httpClient.get('http://localhost:48960/api/Teachers/GetTeacher?id=' + id, {headers: headers});
  }

  public updateTeacher(id: any, data: any){
    return this.httpClient.put('http://localhost:48960/api/Teachers/UpdateTeacher?id=' + id, data, {headers: headers})
  }
}
