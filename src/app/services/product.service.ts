import { Product } from "../modals/product.modal";
import { Retailer } from "../modals/retailer.modal";

export class ProductService{
   products:Product[];
    constructor(){
        this.products = [new Product()];
    }
    
    AddProduct(product:Product)
    {
        this.products.push(product);
        console.log("Added");
    }
    
    RemoveProduct(productid:number) 
    {
        return "Product" ;
    }
   
}