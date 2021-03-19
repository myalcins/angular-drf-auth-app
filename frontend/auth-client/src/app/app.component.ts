import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SessionService } from './auth/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-client';
  private _logged: boolean;

  constructor(private sessionService: SessionService, private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  get logged() {
    return this.sessionService.isAuthanticate();
  }
}
