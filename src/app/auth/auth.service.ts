import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(private router: Router){}

  registerUser(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSucessfully();
  }

  login(authData : AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSucessfully();
  }

  logout(){
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(){
    return {...this.user};
  }
  isAuth() {
    return this.user != null;
  }

  private authSucessfully(){
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

}
