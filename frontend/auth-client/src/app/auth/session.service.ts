import { Injectable } from "@angular/core";
import { Token } from "./auth.service";


@Injectable({
    providedIn: 'root'
  })
export class SessionService {
    private _key: string = 'tokenKeys';
    
    constructor() {}

    setSession(sessionData) {
        if(sessionData) {
            sessionStorage.setItem(this._key, JSON.stringify(sessionData));
        }else {
            sessionStorage.removeItem(this._key);
        }
    }

    getSession() {
        return sessionStorage.getItem(this._key).split('"')[7] || null;
    }

    deleteSession() {
        this.setSession(null);
    }

    isAuthanticate() {
        return this.getSession() ? true : false;
    };
}