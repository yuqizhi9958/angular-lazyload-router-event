import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from "./pages/category/category.component";
const routes: Routes = [
  {
    path:"category/:id/:userid",
    component:CategoryComponent
  },
  {
    path:"page",
    loadChildren:"./pages/page/page.module#PageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
