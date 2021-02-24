import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginauthenticationService } from './loginauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService {

  constructor(private router:Router,private authService:LoginauthenticationService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    if(this.authService.isUserLoggedIn())
    
      return true;
    
    this.router.navigate(['adminlogin']);
    return false;
  }
}
