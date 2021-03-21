import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../req/request.service';
import { SessionService } from './session.service';
import {BehaviorSubject, Observable} from "rxjs";

export interface Token {
  refresh: string,
  access: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private req: RequestService, 
    private router: Router, 
    private sessionService: SessionService) {
      this.isLoggedIn.next(this.sessionService.isAuthanticate());
     }

  login(data: {
    email: string,
    password: string
  }) {
    return this.req.post('obtain-token/', data)
      .subscribe(res => {
        const userSession: Token = res || null;
        this.sessionService.setSession(userSession);
        this.isLoggedIn.next(true);
        this.router.navigate(['home']);
      },
      error => {
        return error;
      });
  }

  logout() {
    this.sessionService.deleteSession();
    this.isLoggedIn.next(false);
  }

  register(data: {
    username: string,
    email: string,
    password: string,
    verify_password: string
  }) {
    return this.req.post('register/', data).subscribe(res => {
      this.router.navigate(['login']);
     },
      error => {
        return error;
      });
  }
}
