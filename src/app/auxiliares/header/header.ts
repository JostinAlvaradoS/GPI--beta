import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  currentPath: string = '';
  path: string= '';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.url;
      }
    });
  }

  ngOnInit() {
    this.currentPath = this.router.url;
    this.verificarpath();
  }

  verificarpath(){
    switch (this.currentPath) {
      case "/GADS":
        this.currentPath = "GADS";
        break;
      case "/bomberos":
        this.currentPath = "Bomberos";
        break;
      case "/registrosDeLaPropiedad":
        this.currentPath = "Registros de la Propiedad";
        break;
      case "/empresasPublicas":
        this.currentPath = "Empresas Públicas";
        break;
      case "/gobiernoCentral":
        this.currentPath = "Gobierno Central";
        break;
      case "/home":

        break;
      default:
        break;
    }
  }

}
