import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './componets/product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './componets/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './componets/table/table.component';
import { ProductsListComponent } from './componets/products-list/products-list.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { FormProductComponent } from './componets/form-product/form-product.component';





@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    ProductsListComponent,
    DashboardComponent,
    FormProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    LayoutModule,

  ],
})
export class AdminModule {}
