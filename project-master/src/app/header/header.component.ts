import { Component, OnInit } from '@angular/core';
import { LoginauthenticationService } from '../loginauthentication.service';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public adminlogin:LoginauthenticationService,public userlogin:UserloginauthenticationService) { }

  ngOnInit(): void {
  }

}
