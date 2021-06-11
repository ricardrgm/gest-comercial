import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { ToCustomersComponent } from './to-customers/to-customers.component';
import { FromSuppliersComponent } from './from-suppliers/from-suppliers.component';


@NgModule({
  declarations: [
    ToCustomersComponent,
    FromSuppliersComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports: [
    ToCustomersComponent,
    FromSuppliersComponent
  ]
})
export class BillingModule { }
