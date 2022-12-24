import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {LoginGuard} from './guards/login.guard';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HomeGuard} from "./guards/home.guard";
import {PerfilComponent} from "./components/perfil/perfil.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/app.home.module').then(m => m.AppHomeModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'registro',
    component: RegisterComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'acciones',
    component: PerfilComponent,
    canActivate: [HomeGuard]
  },

  {
    path: '**',
    redirectTo: 'index'
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, HomeGuard]
})

export class AppRoutingModule {
}
