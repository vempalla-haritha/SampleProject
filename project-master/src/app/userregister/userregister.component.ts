import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  admin: Admin=new Admin();
  submitted=false;
  constructor(private customerService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  newCustomer(): void
  {
    this.router.navigate(['adminlogin']);
  }
save()
{
  this.customerService.createCustomer(this.admin)
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
