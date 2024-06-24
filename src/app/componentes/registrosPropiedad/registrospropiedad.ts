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
    'assets/submenuIcons/gestionadministrativa.svg',
    'assets/submenuIcons/gestiondocumentalenlinea.svg',
    'assets/submenuIcons/gestionyplanificacion.svg',
    'assets/submenuIcons/gestionfinanciera.svg',
    'assets/submenuIcons/gestionjuridica.svg',
    'assets/submenuIcons/gestionuath.svg',
    'assets/submenuIcons/balcondeservicios.svg',
    'assets/submenuIcons/gestiontributariamunicipal.svg',
    'assets/submenuIcons/gestionterritorial.svg',
    'assets/submenuIcons/gestiondeproyectos.svg',
    'assets/submenuIcons/gestiondeaguapotable.svg',
    'assets/submenuIcons/gestionterritorialycatastros.svg',
    'assets/submenuIcons/seguridadyparametrizacion.svg'
  ];

  textosPequenos = [
    'Compras',
    'Control',
    'Gestión',
    'Gestión documental',
    'Gestión de',
    'Gestión',
    'Gestión',
    'Gestión',
    'Balcón de',
    'Gestión tributaria',
    'Gestión',
    'Gestión de',
    'Gestión de',
    'Gestión Territorial y',
    'Seguridad y'
  ];

  textosGrandes = [
    'Públicas',
    'Ejecutivo',
    'Administrativa',
    'en línea',
    'Planificación',
    'Financiera',
    'Jurídica',
    'UATH',
    'Servicios',
    'Municipal',
    'Territorial',
    'Proyectos',
    'Agua Potable',
    'Catastros',
    'Parametrización'
  ];
}
