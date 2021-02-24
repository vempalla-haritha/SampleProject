import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../Policy';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {
    policy : Policy=new Policy();
  constructor(private customerService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.editPolicy();
  }
  editPolicy()
  {
    let id=localStorage.getItem("id");
    this.customerService.getPolicy(+id)
        .subscribe(data=>{
          this.policy=data;
        })
  }
  onUpdate(){
    console.log("into update");
    this.customerService.updateCustomer(this.policy)
    .subscribe(data=>{
      console.log(data);
    this.router.navigate(["view"])
    },
    error=> console.log(error));
    this.policy=new Policy();
    
  }
}
