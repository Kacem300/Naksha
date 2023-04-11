import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  readonly api_url = 'http://localhost:8060';
  readonly ENDPOINT_COM = "/commandes";

  constructor(private http:HttpClient) { }

  public savecommande(model:any):Observable<any>{
    return this.http.post<any>(this.api_url+this.ENDPOINT_COM,model);
  }
}
