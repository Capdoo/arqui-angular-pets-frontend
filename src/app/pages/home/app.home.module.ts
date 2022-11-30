import {NgModule} from '@angular/core';

import {AppHomeComponent} from "./app.home.component";
import {AppHomeRoutingModule} from "./app-home-routing.module";
import {HomeComponent} from "./home/home.component";
import {RegisterPetComponent} from './register-pet/register-pet.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AppHomeComponent, HomeComponent, RegisterPetComponent],
  imports: [
    AppHomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class AppHomeModule {
}
