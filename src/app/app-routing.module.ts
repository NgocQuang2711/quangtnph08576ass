import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ManageComponent } from "./manage/manage.component";
import { ManageListComponent } from "./manage-list/manage-list.component";
import { ManageAddComponent } from "./manage-add/manage-add.component";
import { ManageDetailComponent } from "./manage-detail/manage-detail.component";
import { ManageEditComponent } from "./manage-edit/manage-edit.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ShopComponent } from "./shop/shop.component";
import { FindNotFoundComponent } from "./find-not-found/find-not-found.component";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "shop", component: ShopComponent },
  // {
  //   path: "manage",
  //   component: ManageComponent,
  //   children: [
  //     { path: "", component: ManageListComponent },
  //     { path: "product-manager", component: ManageListComponent },
  //     { path: "add", component: ManageAddComponent },
  //     { path: 'product/:id', component: ManageDetailComponent},
  //     { path: 'product/edit/:id', component: ManageEditComponent}
  //   ]
  // },

  {
    path: 'manage',
    component: ManageComponent,
    children: [
      {path: '', redirectTo: 'product-manager', pathMatch: 'full'},
      {path: 'product-manager', component: ManageListComponent},
      {path: 'add', component: ManageAddComponent},
      {path: 'product/edit/:id', component: ManageEditComponent},
      {path: 'product/:id', component: ManageDetailComponent}
    ]
  },
  {
    path: '404',
    component: FindNotFoundComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '404'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
