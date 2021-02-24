import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../Policy';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatepolicyComponent implements OnInit {
  policy: Policy=new Policy();
  submitted=false;
  constructor(private customerService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  newPolicy(): void
  {
    this.submitted=false;
    this.policy=new Policy();
  }
  save()
{
  this.customerService.createPolicy(this.policy)
       .subscribe(
         data =>{
           console.log(data);
           this.submitted=true;
         },
         error =>console.log(error));
         this.policy=new Policy();
}
onSubmit()
{

  this.save();
}
}
