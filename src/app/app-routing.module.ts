import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ManageComponent } from "./manage/manage.component";
import { ManageListComponent } from "./manage-list/manage-list.component";
import { ManageAddComponent } from "./manage-add/manage-add.component";
import { ManageDetailComponent } from "./manage-detail/manage-detail.component";
import { ManageEditComponent } from "./manage-edit/manage-edit.component";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "manage",
    component: ManageComponent,
    children: [
      { path: "", component: ManageListComponent },
      { path: "product-manager", component: ManageListComponent },
      { path: "addProduct", component: ManageAddComponent },
      { path: 'product/:id', component: ManageDetailComponent},
      { path: 'product/edit/:id', component: ManageEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
