import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent{
  showGif: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showGif = false;
    }, 3000);
  }
  redirectToGads() {
    this.router.navigate(['/GADS']);
  }

  redirectToBomberos() {
    this.router.navigate(['/bomberos']);
  }

  redirectToRegistrosDeLaPropiedad() {
    this.router.navigate(['/registrosDeLaPropiedad']);
  }

  redirectToEmpresasPublicas() {
    this.router.navigate(['/empresasPublicas']);
  }

  redirectToGobiernoCentral() {
    this.router.navigate(['/gobiernoCentral']);
  }
}
