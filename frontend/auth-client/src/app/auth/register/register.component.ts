import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    verify_password: new FormControl('')
  });

  private _errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  register() {
    this.authService.register(this.registerForm.value);
  };
}
