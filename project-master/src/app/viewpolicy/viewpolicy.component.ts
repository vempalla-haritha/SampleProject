import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Policy } from '../Policy';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {
  policies: Observable<Policy[]>
  constructor(private customerService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.policies=this.customerService.getPolicyList();
  }
  editPolicy(policy:Policy):void{
    console.log("into edit");
    localStorage.setItem("id",policy.id.toString());
    this.router.navigate(["edit"]);
  }
}
