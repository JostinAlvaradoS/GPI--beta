import { Component } from '@angular/core';

@Component({
  selector: 'app-registrosPropiedad',
  templateUrl: './registrospropiedad.html',
  styleUrls: ['../gad/gad.css']
})
export class RegistrosPropiedadComponent {
  svgIcons = [
    'assets/submenuIcons/compraspublicas.svg',
    'assets/submenuIcons/controlejecutivo.svg',
    'assets/submenuIcons/escuelaregistral.svg',
    'assets/submenuIcons/gestionadministrativa.svg',
    'assets/submenuIcons/gestiondocumentalenlinea.svg',
    'assets/submenuIcons/gestiondeplanificacion.svg',
    'assets/submenuIcons/gestionfinanciera.svg',
    'assets/submenuIcons/gestionjuridica.svg',
    'assets/submenuIcons/gestionuath.svg',
    'assets/submenuIcons/balcondeservicios.svg',
    'assets/submenuIcons/sistemaregistral.svg',
    'assets/submenuIcons/seguridadyparametrizacion.svg'
  ];



  textosPequenos = [
    'Compras',
    'Control',
    'Escuela',
    'Gestión',
    'Gestión Documental',
    'Gestión de',
    'Gestión',
    'Gestión',
    'Gestión',
    'Balcón de',
    'Sistema',
    'Seguridad y'
  ];

  textosGrandes = [
    'Públicas',
    'Ejecutivo',
    'Registral',
    'Administrativa',
    'en línea',
    'Planificación',
    'Financiera',
    'Jurídica',
    'UATH',
    'Servicios',
    'Registral',
    'Parametrización'
  ];
}
