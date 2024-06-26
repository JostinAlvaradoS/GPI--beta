import { Component } from '@angular/core';

@Component({
  selector: 'app-gobiernocentral',
  templateUrl: './gobiernocentral.html',
  styleUrls: ['../gad/gad.css']
})
export class GobiernoCentralComponent {
  svgIcons = [
    'assets/submenuIcons/compraspublicas.svg',
    'assets/submenuIcons/controlejecutivo.svg',
    'assets/submenuIcons/escueladecapacitacion.svg',
    'assets/submenuIcons/gestionadministrativa.svg',
    'assets/submenuIcons/gestiondocumentalenlinea.svg',
    'assets/submenuIcons/gestiondeplanificacion.svg',
    'assets/submenuIcons/gestionfinanciera.svg',
    'assets/submenuIcons/gestionjuridica.svg',
    'assets/submenuIcons/gestionuath.svg',
    'assets/submenuIcons/balcondeservicios.svg',
    'assets/submenuIcons/gestiondeproyectos.svg',
    'assets/submenuIcons/seguridadyparametrizacion.svg'
  ];

  textosPequenos = [
    'Compras',
    'Control',
    'Escuela de',
    'Gestión',
    'Gestión Documental',
    'Gestión de',
    'Gestión',
    'Gestión',
    'Gestión',
    'Balcón de',
    'Gestión de',
    'Seguridad y'
  ];

  textosGrandes = [
    'Públicas',
    'Ejecutivo',
    'Capacitación',
    'Administrativa',
    'en línea',
    'Planificación',
    'Financiera',
    'Jurídica',
    'UATH',
    'Servicios',
    'Proyectos',
    'Parametrización'
  ];
}
