import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ClientAddComponent } from './clientes/client-add/client-add.component';
import { ClientEditComponent } from './clientes/client-edit/client-edit.component';
import { ClientListComponent } from './clientes/client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { CadastromedicosComponent } from './medicos/cadastromedicos/cadastromedicos.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MedicosComponent } from 'src/app/medicos/medicoslist/medicos.component';
import { OlaService } from './ola-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientAddComponent,
    CadastromedicosComponent,
    MedicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [LoginService,OlaService],
  bootstrap: [AppComponent]
})
export class AppModule {  public ngOnInit()
  {

  }}
