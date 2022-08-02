import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type',  'application/json')

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient : HttpClient) { }

  public getClassByTeacherId(id: any){
    return this.httpClient.get('http://localhost:48960/api/ClassLists/GetClassByTeacherId?id='+ id, {headers: headers});
  }

  public deleteClass(id: any){
    return this.httpClient.delete('http://localhost:48960/api/ClassLists/DeleteClass?id='+ id, {headers: headers});
  }

  public addClass(data: any){
    return this.httpClient.post('http://localhost:48960/api/ClassLists/AddClass', data, {headers: headers});
  }

  public getClass(id: any){
    return this.httpClient.get('http://localhost:48960/api/ClassLists/GetClass?id='+ id, {headers: headers});
  }

  public updateClass(id: any, data: any){
    return this.httpClient.put('http://localhost:48960/api/ClassLists/UpdateClass?id='+ id, data, {headers: headers});
  }
}
