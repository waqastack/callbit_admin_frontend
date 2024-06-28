import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  readonly baseApiIp: string = environment.apiDomain + '/';
  uri: string = this.baseApiIp + 'api/Auth';
  //uri = 'http://localhost:59399/api/Auth';
  constructor(private http:HttpClient) {
   }

  loginUser(username: string, password: string) {
    return this.login(username, password)
        .pipe(map(user => {
            return user;
        }));
}

login(user:any,pass:any){
  //return this.http.post('Auth/login',{username:user,password:pass});
  return this
      .http
      .post(`${this.uri}/login`,{username:user,password:pass})
}
}
