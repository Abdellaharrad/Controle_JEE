import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { BillsComponent } from './bills/bills.component';
import { BillsDetailsComponent } from './bills-details/bills-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AddProductComponent } from './add-product/add-product.component';

function initKeycloak(keycloak: KeycloakService){
  return() =>{
    keycloak.init({
      config:{
        url: 'http://localhost:8080/auth',
        realm: 'my-ecom-realm',
        clientId: 'products-app'
      },
      initOptions: {
        onLoad: 'login-required',
      }
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillsComponent,
    BillsDetailsComponent,
    AddCustomerComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps : [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
