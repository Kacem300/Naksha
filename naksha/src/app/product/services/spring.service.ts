import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  readonly api_url = 'http://localhost:8060';
  readonly ENDPOINT_CARS ="/cars";
  readonly ENDPOINT_CARS2="/car/";
  readonly ENDPOINT_MES = "/messages";

  constructor(private http:HttpClient) { }
  getUsers()
  {
    return this.http.get(this.api_url+this.ENDPOINT_CARS)

  }
  getusersbyid(id:any)
  {
    return this.http.get(this.api_url+this.ENDPOINT_CARS2 + id)
  }
  getmessage(){
    return this.http.get(this.api_url+this.ENDPOINT_MES)
  }
  postmessage(){
    return this.http.post<any>
  }
}
