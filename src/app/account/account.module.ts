import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import { CreateAccountComponent } from './create-account/create-account.component';
import { AppModule } from '../app.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CreateAccountComponent, LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule, 
    AccountRoutingModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AuthenticationComponent, CreateAccountComponent, LoginComponent, AuthenticationComponent]
  
})
export class AccountModule { }
