import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  admin: Admin=new Admin();
  submitted=false;
  constructor(private customerService:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  newCustomer(): void
  {
    this.router.navigate(['userlogin']);
  }
  save()
{
  this.customerService.createUser(this.admin)
       .subscribe(
         data =>{
           console.log(data);
           this.submitted=true;
         },
         error =>console.log(error));
         this.admin=new Admin();
}
onSubmit()
{

  this.save();
}
}
