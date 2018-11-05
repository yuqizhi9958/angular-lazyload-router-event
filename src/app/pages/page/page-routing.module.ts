import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { UserComponent } from "../user/user.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"user",
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // declarations:[HomeComponent,]
})
export class PageRoutingModule {}
