import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const appRoutes:Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgot-password",component:ForgotPasswordComponent}
]
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,
    LoginComponent,RegisterComponent,ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
