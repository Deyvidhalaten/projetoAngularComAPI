import { Product } from './../../core/model/product';
import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProductService } from 'src/app/core/services/product/product.service';

@Injectable()
export class ProductDataResolve implements Resolve<any> {
  constructor(private as: ProductService) {}

  resolve (route:ActivatedRouteSnapshot): Observable<Product>{
    return this.as.getProductById(route.params.id);
  }
}

const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },
  {
    path:'register',
    component:FormComponent
  },
  {
    path:':id',
    component: FormComponent,
    resolve: {
      product: ProductDataResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ProductDataResolve]
})
export class ProductRoutingModule { }
