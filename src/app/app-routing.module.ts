import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';
import { LoginComponent } from './account/login/login.component';
import { CreateFolderComponent } from './pages/create-folder/create-folder/create-folder.component';
import { HomeComponent } from './pages/home/home.component';
import { InternalModule } from './pages/internal/internal.module';
import { SingleExpenseComponent } from './pages/single-expense/single-expense.component';
import { SingleFolderComponent } from './pages/single-folder/single-folder.component';

const routes: Routes = [

  { path: "", loadChildren: ()=> AccountModule },
  { path:"home", loadChildren: ()=> InternalModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
