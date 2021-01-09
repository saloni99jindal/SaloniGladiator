import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:54405/";
  filterbyprice(p1:any,p2:any):Observable<any>
  {
     // debugger;
      return this.http.get<any>(this.url+"FilterByPrice?p1="+p1+"&p2="+p2);
  }

  filterbycategory(cname:any):Observable<any>
  {
     // debugger;
     return this.http.get<any>(this.url+"FilterByCategory?cname="+cname);
  }
  filterbyboth(p1:any,p2:any,cname:any):Observable<any>
  {
    return this.http.get<any>(this.url+"FilterByBoth?p1="+p1+"&p2="+p2+"&cname="+cname);
  }
  sortByPriceAsc():Observable<any>
  {
    return this.http.get("http://localhost:54405/SortByPrice");
  }
  sortByPriceDesc():Observable<any>
  {
    return this.http.get("http://localhost:54405/SortByPriceDesc");
  }
  getallcategory():Observable<any>{
    return this.http.get("http://localhost:54405/GetByCategory");
  }
}