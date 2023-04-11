import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  readonly api_url = 'http://localhost:8060';
 readonly ENDPOINT_MES = "/messages";
  constructor(private http:HttpClient) { }


public saveUserTyped(user: any): Observable<any> {

    return this.http.post<any>(this.api_url+this.ENDPOINT_MES, user);
}

}

