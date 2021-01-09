import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { RetailerService } from './services/retailer.service';
import { AddToCartService } from './services/add-to-cart.service';
import { ProductlistService } from './services/productlist.service';
import {  HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { FilterService } from './services/filter.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,RetailerService,AddToCartService,ProductlistService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
