import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewAllLeaveComponent } from './view-all-leave/view-all-leave.component';
import { AddSecurityComponent } from './add-security/add-security.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addemp",component:AddEmpComponent
  },
  {
    path:"viewemp",component:ViewEmpComponent
  },
  {
    path:"addleave",component:AddLeaveComponent
  },
  {
    path:"viewleave",component:ViewAllLeaveComponent
  },
  {
    path:"addsecurity",component:AddSecurityComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddEmpComponent,
    ViewEmpComponent,
    AddLeaveComponent,
    ViewAllLeaveComponent,
    AddSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
