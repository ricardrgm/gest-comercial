import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path: '', component: CustomerComponent,
  children: [
  { path: 'lista', component: CustomerListComponent },
  { path: 'lista/:id', component: CustomerDataComponent },
  { path: ':id', component: CustomerDataComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
