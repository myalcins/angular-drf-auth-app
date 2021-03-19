import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { SessionService } from '../auth/session.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _url: string;

  constructor(private http: HttpClient, private sessionService: SessionService) { 
    this._url = environment.apiUrl;
  }

  get httpOtions() {
    let httpOtions = {
      'Content-Type': 'application/json',
      
    }
    if(this.token){
      httpOtions['Authorization'] = "Bearer " + this.token;
    }
    return {headers: new HttpHeaders(httpOtions),};
  }

  get(url: string): Observable<any>{
    return this.http.get(this._url + url, this.httpOtions);
  }

  post(url: string, data: any, httpOtions: any = this.httpOtions): Observable<any>{
    return this.http.post(this._url + url, data, httpOtions);
  }

  patch(url: string, data: any, httpOtions: any = this.httpOtions): Observable<any>{
    return this.http.put(this._url + url, data, httpOtions);
  }

  delete(url: string, httpOptions: any = this.httpOtions): Observable<any>{
    return this.http.delete(this._url + url, httpOptions);
  }

  get token() {
    return this.sessionService.getSession();
  }
}
