import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-logoutuser',
  templateUrl: './logoutuser.component.html',
  styleUrls: ['./logoutuser.component.css']
})
export class LogoutuserComponent implements OnInit {

  constructor(private authenticationService:UserloginauthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.authenticationService.logOut();
    this.router.navigate(['adminlogin']);
  }

}
