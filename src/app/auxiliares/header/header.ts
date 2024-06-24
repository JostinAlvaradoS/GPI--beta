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
        this.currentPath = this.transformPath(event.url);
        this.path = event.url;
      }
    });
  }

  ngOnInit() {
    this.currentPath = this.transformPath(this.router.url);
    console.log(this.currentPath);
  }

  private transformPath(url: string): string {
    // Remover el primer '/' y formatear el texto
    let path = url.startsWith('/') ? url.substring(1) : url;
    path = path.split('/')[0]; // Opcional: si quieres solo la primera parte de la ruta
    return this.formatPath(path);
  }

  private formatPath(path: string): string {
    // Insertar espacios antes de letras mayúsculas y capitalizar
    return path.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  }
}
