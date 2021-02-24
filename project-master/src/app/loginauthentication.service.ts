import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginauthenticationService {
  uname:string;
  constructor() { }
  authenticate(username,password)
  {
    if(username === "admin" && password === "password")
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
