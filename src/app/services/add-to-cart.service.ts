import { Injectable } from "@angular/core";


@Injectable()
export class AddToCartService {

  url:string = "";

    constructor() { }

    insertIntoCart(useremail:string, productid: number, cartquantity : number)  //Observable<any>
        // const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
        // return this.http.post<any>(this.url+"InsertIntoCart?useremail="+useremail+
        // "&productid="+productid+"&cartquantity="+cartquantity,httpheader);
        
   {
          console.log("useremail");
          console.log("productid");
          console.log("cartquantity");
         
   } 

}