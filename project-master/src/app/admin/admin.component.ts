import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginauthenticationService } from '../loginauthentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username=''
  password=''
  invalidLogin=false
  constructor(private router:Router,private loginservice:LoginauthenticationService) { }

  ngOnInit(): void {
  }
  adminLogin()
  {
    this.router.navigate(['userregister'])
  }
  checkLogin(){
    if(this.loginservice.authenticate(this.username,this.password))
    {
      this.router.navigate([''])
      this.invalidLogin=false
    }
    else
    {
      this.invalidLogin=true;
    }
  }
}
