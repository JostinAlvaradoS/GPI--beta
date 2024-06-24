import { Component } from '@angular/core';

@Component({
  selector: 'app-empresaspublicas',
  templateUrl: './empresaspublicas.html',
  styleUrls: ['../gad/gad.css']
})
export class EmpresaspublicasComponent {
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
    'assets/submenuIcons/sistemadeprevencionyriesgos.svg',
    'assets/submenuIcons/seguridadyparametrizacion.svg'
  ];

  textosPequenos = [
    'Compras',
    'Control',
    'Escuela de',
    'Gestión',
    'Gestión',
    'Gestión de',
    'Gestión',
    'Gestión',
    'Gestión',
    'Balcón de',
    'Gestión de',
    'Sistema de',
    'Seguridad y'
  ];

  textosGrandes = [
    'Públicas',
    'Ejecutivo',
    'Capacitación',
    'Administrativa',
    'Documental en línea',
    'Planificación',
    'Financiera',
    'Jurídica',
    'UATH',
    'Servicios',
    'Proyectos',
    'Prevención y Riesgos',
    'Parametrización'
  ];
}
