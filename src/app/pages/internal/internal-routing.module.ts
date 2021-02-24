import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFolderComponent } from '../create-folder/create-folder/create-folder.component';
import { HomeComponent } from '../home/home.component';
import { SingleExpenseComponent } from '../single-expense/single-expense.component';
import { SingleFolderComponent } from '../single-folder/single-folder.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [

  {
    path: "", component: HomeComponent , children:[
      { path: "", component: InitialComponent },
      { path: "folder", component: CreateFolderComponent },
      { path: "single-folder/:id", component: SingleFolderComponent },
      { path: "single-expense/:id", component: SingleExpenseComponent },

    ]
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
