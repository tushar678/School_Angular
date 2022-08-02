import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class TutoringGroupService {

  constructor(private httpClient: HttpClient) { }

  public getTutoringGroups(){
    return this.httpClient.get('http://localhost:48960/api/TutoringGroups/GetTutoringGroups', {headers: headers});
  }
}
