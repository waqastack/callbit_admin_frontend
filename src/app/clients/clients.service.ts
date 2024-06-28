import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  readonly baseApiIp: string = environment.apiDomain + '/';
  uri: string = this.baseApiIp + 'api/Admin';
  //uri = 'http://localhost:59399/api/Admin';
 constructor(private http:HttpClient) 
  {}
  getClients():Promise<any> {
    return this
      .http
      .get(`${this.uri}/GetAllClients`).toPromise();
  }
  deleteStudent(id:number)
  {
    
    return this
    .http
    .get(`${this.uri}/deleteData/?id=`+ id);
  }
}
