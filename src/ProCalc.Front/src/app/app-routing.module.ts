import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastromedicosComponent } from './medicos/cadastromedicos/cadastromedicos.component';
import { ClientAddComponent } from './clientes/client-add/client-add.component';
import { ClientEditComponent } from './clientes/client-edit/client-edit.component';
import { ClientListComponent } from './clientes/client-list/client-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MedicosComponent } from './medicos/medicoslist/medicos.component';



const routes: Routes = [

  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'clientes', component: ClientListComponent, pathMatch: 'full' },
  { path: 'cliente-edit', component: ClientEditComponent, pathMatch: 'full' },
  { path: 'cliente-add', component: ClientAddComponent, pathMatch: 'full' },
  { path: 'cliente-list', component: ClientListComponent, pathMatch: 'full' },
  { path: 'login-component', component: LoginComponent, pathMatch: 'full' },
  { path: 'cadastromedicos', component: CadastromedicosComponent, pathMatch: 'full' },
  { path: 'medicos-list', component: MedicosComponent, pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
