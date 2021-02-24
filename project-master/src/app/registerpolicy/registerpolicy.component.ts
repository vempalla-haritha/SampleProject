import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Policy } from '../Policy';

@Component({
  selector: 'app-registerpolicy',
  templateUrl: './registerpolicy.component.html',
  styleUrls: ['./registerpolicy.component.css']
})
export class RegisterpolicyComponent implements OnInit {
  policy : Policy=new Policy();
  duedate:string
  constructor(private customerService:AdminserviceService,private router:Router) { }

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
    this.router.navigate(["success"])
    
  }
}
