import { NotFoundComponent } from './screens/not-found/not-found.component';
import { HomeComponent } from './screens/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'animal',
    loadChildren:async () =>
    import('./animal/animal.module').then((p) => p.AnimalModule),
  },
  {
    path:'person',
    loadChildren:async () =>
    import('./person/person.module').then((p) => p.PersonModule),
  },
  {
    path:'address',
    loadChildren:async () =>
    import('./address/address.module').then((p) => p.AddressModule),
  },
  {
    path:'product',
    loadChildren:async () =>
    import('./product/product.module').then((p) => p.ProductModule),
  },
  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
