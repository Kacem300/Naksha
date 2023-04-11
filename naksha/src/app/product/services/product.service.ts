
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getallproduct(){
    return this.http.get(environment.baseapi+'products')
  }

  getproductid(id:any){
  return this.http.get(environment.baseapi+'products/'+id)
}

}
