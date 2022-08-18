
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AnimalRoutingModule } from './animal-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
  ],

  imports: [
    CommonModule,
    AnimalRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: []
})
export class AnimalModule { }
