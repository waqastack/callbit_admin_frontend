import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { SignUpRequest } from '../dashboard/data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditUserDataService {
  readonly baseApiIp: string = environment.apiDomain + '/';
  uri: string = this.baseApiIp + 'api/Admin';
  //uri = 'http://localhost:59399/Admin';
   flag:boolean=false;
  constructor(private http:HttpClient) { }

  editStudent(id:number) {
    return this
      .http
      .get(`${this.uri}/getSingleUserData/?id=`+ id);
  }
  updateStudent(Data:any,id:number) {

    return this
      .http
      .post(`${this.uri}/updateData/?id=`+ id,{Data})
      .subscribe(res => console.log('Done'));
  }

}
