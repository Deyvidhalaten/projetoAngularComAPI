import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './screens/home/home.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class FeaturesModule { }
