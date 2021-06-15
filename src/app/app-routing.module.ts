import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromSuppliersComponent } from './billing/from-suppliers/from-suppliers.component';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { StoringListComponent } from './storing/storing-list/storing-list.component';
import { SupplierRequestComponent } from './supplier/supplier-request/supplier-request.component';
import { SuppliersListComponent } from './supplier/suppliers-list/suppliers-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'customer', component: CustomerComponent,
    children: [
      { path: 'lista', component: CustomerListComponent },
      { path: ':id', component: CustomerDataComponent }
    ]
  },
  // {path:'customer',component:CustomerListComponent},
  // {path:'customer/:id',component:CustomerDataComponent},
  { path: 'supplier', component: SuppliersListComponent },
  { path: 'supplier/:id', component: SupplierRequestComponent },
  // lazy loading
  //{ path: 'storing', component: StoringListComponent },
  { path: 'storing', loadChildren:()=>import('./storing/storing.module').then(m=>m.StoringModule) },
  { path: 'billing', component: FromSuppliersComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
