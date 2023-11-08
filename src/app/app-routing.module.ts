import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
  },
  {
    component:TableComponent,
    path:'table/:id',
  },
  {
    redirectTo:'home',
    path:'**',
  },
  {
    redirectTo:'home',
    path:'**',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
