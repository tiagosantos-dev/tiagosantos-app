import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateFolderComponent } from './pages/create-folder/create-folder/create-folder.component';
import { HomeComponent } from './pages/home/home.component';
import { InitialComponent } from './pages/internal/initial/initial.component';
import { InternalModule } from './pages/internal/internal.module';
import { SingleExpenseComponent } from './pages/single-expense/single-expense.component';
import { SingleFolderComponent } from './pages/single-folder/single-folder.component';

const routes: Routes = [
 
  {
   
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
   
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
  
    ],

  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
