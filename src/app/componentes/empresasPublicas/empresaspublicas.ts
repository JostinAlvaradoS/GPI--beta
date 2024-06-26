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
    'assets/submenuIcons/gestionadministrativa.svg',
    'assets/submenuIcons/gestiondocumentalenlinea.svg',
    'assets/submenuIcons/gestionfinanciera.svg',
    'assets/submenuIcons/gestiondeplanificacion.svg',
    'assets/submenuIcons/gestionjuridica.svg',
    'assets/submenuIcons/gestionuath.svg',
    'assets/submenuIcons/balcondeservicios.svg',
    'assets/submenuIcons/terminalesterrestres.svg',
    'assets/submenuIcons/gestiondeproyectos.svg',
    'assets/submenuIcons/gestiondeaguapotable.svg',
    'assets/submenuIcons/mercados.svg',
    'assets/submenuIcons/seguridadyparametrizacion.svg'
  ];

  textosPequenos = [
    'Compras',
    'Control',
    'Gestión',
    'Gestión Documental',
    'Gestión',
    'Gestión de',
    'Gestión',
    'Gestión',
    'Balcón de',
    'Terminales',
    'Gestión de',
    'Gestión de',
    '',
    'Seguridad y'
  ];

  textosGrandes = [
    'Públicas',
    'Ejecutivo',
    'Administrativa',
    'en línea',
    'Financiera',
    'Planificación',
    'Jurídica',
    'UATH',
    'Servicios',
    'Terrestres',
    'Proyectos',
    'Agua Potable',
    'Mercados',
    'Parametrización'
  ];
}
