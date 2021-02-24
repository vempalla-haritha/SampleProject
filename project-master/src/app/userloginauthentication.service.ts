import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserloginauthenticationService {
  uname:string;
  constructor() { }
  authenticate(username,password)
  {
    if(username === "Lakshmi" && password === "lakshmi")
    {
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('username')
    this.uname=user;
    return !(user === null)
  }

  logOut()
  {
    sessionStorage.removeItem('username')
  }
}
