import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers= new HttpHeaders()
  .set('content-type',  'application/json')

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  public login(data: any) {
    return this.httpClient.post('http://localhost:48960/api/UserSigns/Login',data, {headers: headers});
  }

  public getUsers(){
    return this.httpClient.get('http://localhost:48960/api/UserSigns/GetUsers', {headers: headers});
  }

  public deleteUser(id: any){
    return this.httpClient.delete('http://localhost:48960/api/UserSigns/DeleteUser?id='+ id, {headers: headers})
  }
  
  public getUser(id: any){
    return this.httpClient.get('http://localhost:48960/api/UserSigns/GetUser?id='+ id, {headers: headers});
  }

  public updateData(id:any, data: any){
    return this.httpClient.put('http://localhost:48960/api/UserSigns/UpdateUser?id='+ id, data, {headers: headers});
  }
  
  public addData(data: any){
    return this.httpClient.post('http://localhost:48960/api/UserSigns/AddUser', data, {headers: headers});
  }
}
