import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {RegisterPetComponent} from "./register-pet/register-pet.component";


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'register-pet', component: RegisterPetComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppHomeRoutingModule {
}
