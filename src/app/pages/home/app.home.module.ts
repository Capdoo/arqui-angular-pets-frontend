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
import {ReadPetComponent} from './read-pet/read-pet.component';
import {PetsComponent} from './pets/pets.component';
import {LostPetsComponent} from './lost-pets/lost-pets.component';
import {RegisterLostComponent} from './register-lost/register-lost.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {SafePipePipe} from "../../providers/pipes/safe-pipe.pipe";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    AppHomeComponent,
    HomeComponent,
    RegisterPetComponent,
    ReadPetComponent,
    PetsComponent,
    LostPetsComponent,
    RegisterLostComponent,
    SafePipePipe
  ],
  imports: [
    AppHomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [SafePipePipe]
})
export class AppHomeModule {
}
