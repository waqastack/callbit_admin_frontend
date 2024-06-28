import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendAmountService {
  readonly baseApiIp: string = environment.apiDomain + '/';
  uri: string = this.baseApiIp + 'api/Admin';
  //uri = 'http://localhost:59399/api/Admin';

  constructor(private http: HttpClient) { }
  GetPendingSendAmount(): Promise<any> {
    return this
      .http
      .get(`${this.uri}/GetPendingSendAmount`).toPromise();
  }
  TransferAmount(id: number) {
    return this.http.get(`${this.uri}/TransferAmount/?id=` + id);
  }
}

