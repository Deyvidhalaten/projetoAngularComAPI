import { Observable } from 'rxjs';
import { AnimalService } from 'src/app/core/services/animal/animal.service';
import { Animal } from 'src/app/core/model/animal';

import { FormComponent } from './form/form.component';
import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ListComponent } from './list/list.component';

@Injectable()
export class AnimalDataResolve implements Resolve<any> {
  constructor(private as: AnimalService) {}

  resolve (route:ActivatedRouteSnapshot): Observable<Animal>{
    return this.as.getAnimalById(route.params.id);
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
      animal:AnimalDataResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AnimalDataResolve]
})
export class AnimalRoutingModule { }
