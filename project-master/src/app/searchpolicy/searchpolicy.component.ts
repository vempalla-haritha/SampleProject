import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminregisterComponent } from '../adminregister/adminregister.component';
import { AdminserviceService } from '../adminservice.service';
import { Policy } from '../Policy';

@Component({
  selector: 'app-searchpolicy',
  templateUrl: './searchpolicy.component.html',
  styleUrls: ['./searchpolicy.component.css']
})
export class SearchpolicyComponent implements OnInit {
  type:string;

  policies:Policy[];
  constructor(private customerService:AdminserviceService,private router : Router) { }

  ngOnInit(): void {
    this.type=null;
  }
  submitted=false;
  private searchCustomers() {
    this.policies=[];
    this.customerService.getCustomerByType(this.type)
        .subscribe(data=>
          {
            this.policies=data;
            this.submitted=true;
          },
          );
  }
  
onSubmit()
{
  this.searchCustomers();
}
register(policy:Policy):void{
  console.log("into edit");
  localStorage.setItem("id",policy.id.toString());
  this.router.navigate(["register"]);
}
}
