import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { ManageAddComponent } from './manage-add/manage-add.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';
import { ManageDetailComponent } from './manage-detail/manage-detail.component';
import { ProductService } from './product.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ManageComponent, ManageAddComponent, ManageListComponent, ManageEditComponent, ManageDetailComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
