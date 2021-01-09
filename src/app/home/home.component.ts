import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Order} from '../modals/order.modal'
import {Product} from '../modals/product.modal'
import {AddToCartService} from '../services/add-to-cart.service'

import { ProductlistService } from '../services/productlist.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm : FormGroup;
  searchBar:boolean=false;
  productDetails: any=[];
  searchDetails: any=[];

  showModal : boolean = false;
  product : Product;
  status : any;
  useremail = sessionStorage.getItem('useremail');
  stop : boolean = false;

  constructor(private router:Router,private productService:ProductlistService,private formBuilder:FormBuilder,
    private addToCartService : AddToCartService) { 
    
    this.product=new Product();
    this.searchForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    if(this.searchBar==false){
      this.FetchProduct();
    }
    //this.reload();

    this.searchForm = this.formBuilder.group({
      search : new FormControl('')
     
    })
  }
  reload(){
    if(this.useremail != null && this.stop == false)
    this.stop = true;
    location.reload();
    return;
  }

  FetchProduct(){
     this. productDetails=this.productService.getProduct().subscribe((data)=>
     {this. productDetails=data;console.log(data)})
    console.log(this. productDetails);
  }

  OpenModal(productid : number ,productname : string, productprice: number,productquantity : number,
    productdescription : string,productbrand : string ,productimage1 : string,retailerid : number,categoryid : number){
    this.product.productid = productid;
    this.product.productname = productname;
    this.product.productprice = productprice;
    this.product.productquantity = productquantity;
    this.product.productdescription = productdescription;
    this.product.productbrand = productbrand;
    this.product.productimage1 = productimage1;
    this.product.retailerid = retailerid;
    this.product.categoryid = categoryid;
  }

  AddToCart(productid:any,quantity :any)
  {
    console.log(quantity);
    if(this.useremail != null){
      this.status = this.addToCartService.insertIntoCart(this.useremail, productid,quantity)
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
