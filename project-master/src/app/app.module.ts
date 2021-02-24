import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { SearchpolicyComponent } from './searchpolicy/searchpolicy.component';
import { RegisterpolicyComponent } from './registerpolicy/registerpolicy.component';
import { SuccessComponent } from './success/success.component';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { LogoutuserComponent } from './logoutuser/logoutuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    UserregisterComponent,
    AdminregisterComponent,
    CreatepolicyComponent,
    ViewpolicyComponent,
    EditpolicyComponent,
    SearchpolicyComponent,
    RegisterpolicyComponent,
    SuccessComponent,
    LogoutadminComponent,
    LogoutuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
