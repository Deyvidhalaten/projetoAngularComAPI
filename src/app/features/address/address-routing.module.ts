import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { Address } from 'src/app/core/model/address';
import { AddressService } from 'src/app/core/services/address/address.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class AddressDataResolver implements Resolve<any> {
  constructor(private ps: AddressService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Address> {
    return this.ps.getAddressById(route.params.id);
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
    path: ':id',
    component:FormComponent,
    resolve:{
      address: AddressDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AddressDataResolver]
})
export class AddressRoutingModule { }
