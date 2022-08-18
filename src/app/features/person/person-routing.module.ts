import { Pessoa } from './../../core/model/pessoa';
import { PessoaService } from 'src/app/core/services/person/person.service';
import { FormComponent } from './form/form.component';
import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { ListComponent } from './list/list.component';
import { Observable } from 'rxjs';

@Injectable()
export class PeopleDataResolver implements Resolve<any> {
  constructor(private ps: PessoaService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Pessoa> {
    return this.ps.getPersonById(route.params.id);
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
      pessoa: PeopleDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PeopleDataResolver]
})
export class PersonRoutingModule { }
