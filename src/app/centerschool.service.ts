import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type',  'application/json');

@Injectable({
  providedIn: 'root'
})
export class CenterschoolService {

  constructor(private httpClient : HttpClient) { }

  
  public getByCenterId(id: any){
    return this.httpClient.get('http://localhost:48960/api/CenterSchools/GetByCenterId?id='+ id, {headers: headers});
  }

  public addData(data: any){
    return this.httpClient.post('http://localhost:48960/api/CenterSchools/Post', data, {headers: headers});
  }

  public deleteData(schoolid: any, centreid:any){
    return this.httpClient.delete('http://localhost:48960/api/CenterSchools/DeleteByIds?schoolid=' + schoolid + '&centerid=' + centreid, {headers: headers});
  }
}
