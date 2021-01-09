import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable(
  {providedIn: 'root'}
)
export class ProductlistService {

  constructor(private http:HttpClient){ }
  getProduct():Observable<any>
  {
    //debugger;
     console.log("getallproducts");
     return this.http.get("http://localhost:54405/GetAllPoduct");
   
  }
}