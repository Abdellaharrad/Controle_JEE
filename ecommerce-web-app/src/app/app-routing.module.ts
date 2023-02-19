import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { BillsComponent } from './bills/bills.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path : "products", component : ProductsComponent
  }, 
  {
    path : "customers", component : CustomersComponent
  },
  {
    path : "bills/:customerID", component : BillsComponent
  },
  {
    path : "bill-details/:billID", component : BillsDetailsComponent
  },
  {
    path: 'add-customer', component: AddCustomerComponent
  },
  {
    path: 'add-product', component: AddProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
