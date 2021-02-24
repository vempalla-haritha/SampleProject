import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginauthenticationService } from '../loginauthentication.service';

@Component({
  selector: 'app-logoutadmin',
  templateUrl: './logoutadmin.component.html',
  styleUrls: ['./logoutadmin.component.css']
})
export class LogoutadminComponent implements OnInit {

  constructor(private authenticationService: LoginauthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.authenticationService.logOut();
    this.router.navigate(['adminlogin']);
  }

}
