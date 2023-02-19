import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public user = {
    name:'',
    email:''
  }

  constructor(private _http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }

  addCustomer(){
    this._http.post("http://localhost:8888/CUSTOMER-SERVICE/customers/add_customer", this.user).subscribe(
      (data:any)=>{
          this._router.navigate(['/customers'])
      }
    )
  }
}