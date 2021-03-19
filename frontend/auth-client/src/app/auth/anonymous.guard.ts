import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SessionService } from "./session.service";

@Injectable({
    providedIn: 'root'
  })
export class AnonymousGuard implements CanActivate {
    constructor(private sessionService: SessionService, private router: Router) {}

    canActivate(): boolean {
        if(!this.sessionService.isAuthanticate()){
            return true;
        }
        this.router.navigate(['home']);
        return false;
    }
}