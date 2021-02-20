import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import { CreateAccountComponent } from './create-account/create-account.component';
import { AppModule } from '../app.module';
import { AccountRoutingModule } from './account-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [ CreateAccountComponent, LoginComponent],
  imports: [
    CommonModule, 
    AccountRoutingModule,
    MatProgressBarModule
  ]
  
})
export class AccountModule { }
