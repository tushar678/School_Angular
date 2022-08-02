import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type',  'application/json')

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private httpClient : HttpClient) { }

  public getCentres(){
    return this.httpClient.get('http://localhost:48960/api/Centers/GetCenters', {headers: headers});
  }

  public getCentre(id: any){
    return this.httpClient.get('http://localhost:48960/api/Centers/GetCenter?id='+ id, {headers: headers});
  }
  
  public updateCentre(id:any, data:any){
    return this.httpClient.put('http://localhost:48960/api/Centers/UpdateCenter?id='+ id, data, {headers: headers});
  }

  public deleteCentre(id:any){
    return this.httpClient.delete('http://localhost:48960/api/Centers/DeleteCenter?id='+ id, {headers: headers});
  }

  public addCentre(data: any){
    return this.httpClient.post('http://localhost:48960/api/Centers/AddCenters', data, {headers: headers});
  }
}
