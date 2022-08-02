import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type',  'application/json')
  
@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  constructor(private httpClient : HttpClient) { }

  public getParent(id: any){
    return this.httpClient.get('http://localhost:48960/api/Parents/GetParent?id='+ id, {headers: headers});
  }

  public deleteParent(id: any){
    return this.httpClient.delete('http://localhost:48960/api/Parents/DeleteParent?id='+ id, {headers: headers});
  }

  public addParent(data: any){
    return this.httpClient.post('http://localhost:48960/api/Parents/AddParent', data, {headers: headers});
  }
}
