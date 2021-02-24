import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username=''
  password=''
  invalidLogin=false
  constructor(private router:Router,private loginservice:UserloginauthenticationService) { }

  ngOnInit(): void {
  }
  adminLogin()
  {
    this.router.navigate(['adminregister'])
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
