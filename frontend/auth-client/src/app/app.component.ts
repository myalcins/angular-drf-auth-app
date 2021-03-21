import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SessionService } from './auth/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'auth-client';
  isLogged: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(logged => {
      this.isLogged = logged;
    })
  }

  logout() {
    this.authService.logout();
  }
}
