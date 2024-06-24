import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'testing' && this.password === 'testing') {
      this.router.navigate(['/home']);
    } else {
      alert('Verifique su usuario y contraseña');
    }
  }
}
