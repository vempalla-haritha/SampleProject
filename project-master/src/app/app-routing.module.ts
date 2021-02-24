import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { LoginauthenticationService } from './loginauthentication.service';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { LogoutuserComponent } from './logoutuser/logoutuser.component';
import { RegisterpolicyComponent } from './registerpolicy/registerpolicy.component';
import { SearchpolicyComponent } from './searchpolicy/searchpolicy.component';
import { SuccessComponent } from './success/success.component';
import { UserComponent } from './user/user.component';
import { UserauthguardService } from './userauthguard.service';
import { UserregisterComponent } from './userregister/userregister.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';

const routes: Routes = [
  {path:'adminlogin',component:AdminComponent},
  {path:'userlogin',component:UserComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'add',component:CreatepolicyComponent},
  {path:'view',component:ViewpolicyComponent,canActivate:[AdminauthguardService]},
  {path:'edit',component:EditpolicyComponent},
  {path:'search',component:SearchpolicyComponent,canActivate:[UserauthguardService]},
  {path:'register',component:RegisterpolicyComponent},
  {path:'success',component:SuccessComponent},
  {path:'',redirectTo: 'view',pathMatch:'full'},
  {path:'logoutadmin',component:LogoutadminComponent,canActivate:[AdminauthguardService]},
  {path:'logoutuser',component:LogoutuserComponent,canActivate:[UserauthguardService]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
