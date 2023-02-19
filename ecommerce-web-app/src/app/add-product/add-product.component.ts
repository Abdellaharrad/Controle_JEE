import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product = {
    name: '',
    price: 0,
    quantity: 0
  }

  constructor(private _http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this._http.post("http://localhost:8888/PRODUCT-SERVICE/add_product", this.product).subscribe(
      (data:any)=>{
        this._router.navigate(['/products'])
      }
    )
  }
}