import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {


  constructor(private router: Router) {}

  login() {
      this.router.navigate(['/home']);
    }
}
