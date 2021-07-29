import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './componets/product-form/product-form.component';
import { NavComponent } from './componets/nav/nav.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { TableComponent } from './componets/table/table.component';
import { ProductsListComponent } from './componets/products-list/products-list.component';
import { FormProductComponent } from './componets/form-product/form-product.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/create',
        component: FormProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
