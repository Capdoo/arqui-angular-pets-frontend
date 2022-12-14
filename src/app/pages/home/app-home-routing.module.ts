import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {RegisterPetComponent} from "./register-pet/register-pet.component";
import {ReadPetComponent} from "./read-pet/read-pet.component";
import {LostPetsComponent} from "./lost-pets/lost-pets.component";
import {PetsComponent} from "./pets/pets.component";


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'register-pet', component: RegisterPetComponent},
  {path:'pets', component: PetsComponent},
  {path:'read-pet', component: ReadPetComponent},
  {path:'lost-pets', component: LostPetsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppHomeRoutingModule {
}
