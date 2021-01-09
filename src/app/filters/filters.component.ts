import { Component, OnInit } from '@angular/core';
import { Category } from '../modals/category.model';
import {Product} from '../modals/product.modal'
import {AddToCartService} from '../services/add-to-cart.service'
import { FilterService } from '../services/filter.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  showModal : boolean = false;
  prod : Product 
  status : any;
  useremail = sessionStorage.getItem('useremail');
  filterbyprice: any =[];
  filterbycategory: any=[];
  sortbypriceasc: any=[];
  sortbypricedesc:any=[];
  category:any;
  categories:any;
  constructor(private filterService:FilterService,private addtocartserv:AddToCartService) {
    this.prod=new Product();
    
    this.categories=this.filterService.getallcategory().subscribe((data)=>{
      this.categories=data; 
      console.log(data)});
  }
  ngOnInit(): void {

  }
  findCategory(cname:any)
  {​​​​
     var name = cname.value;
     console.log(cname);
     this.categories.forEach((element:Category)=>{​​​​
        if(element.categoryname==name)
        this.category=element;
        }​​​​);
  }​​​​

  ByPrice(price1:any,price2:any)
  {
    console.log(price1);
    this.filterbyprice=this.filterService.filterbyprice(price1,price2).subscribe((res)=>{
      this.filterbyprice=res;
      console.log(res)
    });
    console.log(this.filterbyprice);
  }

  ByCategory(category:any)
  {
    var cat = category.value;
    console.log(cat);
    this.filterbycategory=this.filterService.filterbycategory(cat).subscribe((data)=>{
      this. filterbycategory=data;
      console.log(data)
    });
    console.log(this. filterbycategory);  
  }

  // ByBoth(price1:any,price2:any,category:any)
  // {
  //   this.filterbycategory=this.filterService.filterbyboth(price1,price2,category).subscribe((data)=>{
  //     this. filterbycategory=data;
  //     console.log(data)
  //   });
  //   console.log(this. filterbycategory);  
  // }
  ByPriceAsec()
  {
    this.sortbypriceasc =this.filterService.sortByPriceAsc().subscribe((data)=>{
      this.sortbypriceasc=data;
      console.log(data)
    });
    console.log(this.sortbypriceasc);

  }
  ByPriceDesc()
  {
    this.sortbypricedesc =this.filterService.sortByPriceDesc().subscribe((data)=>{
      this.sortbypricedesc=data;
      console.log(data)
    });
    console.log(this.sortbypricedesc);

  }

  openModal(productid : number ,productname : string, productprice: number,productquantity : number,productdescription : string,productbrand : string ,productimage1 : string,retailerid : number,categoryid : number){
    this.prod.productid = productid;
    this.prod.productname = productname;
    this.prod.productprice = productprice;
    this.prod.productquantity = productquantity;
    this.prod.productdescription = productdescription;
    this.prod.productbrand = productbrand;
    this.prod.productimage1 = productimage1;
    this.prod.retailerid = retailerid;
    this.prod.categoryid = categoryid;
  }
  AddToCart(productid:any,quantity :any)
  {
    console.log(quantity);
    if(this.useremail != null){
      this.status = this.addtocartserv.insertIntoCart(this.useremail, productid,quantity)
      //.subscribe(
    //     data => {
    //       if(data == "Success"){
          // alert("Product successfully added");
    //       }
    //     }
    //   )
    
    
    }
    else{
      alert("Please login to buy products");
    
     }
                           
  }
}
