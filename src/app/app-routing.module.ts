import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home";
import {GadComponent} from "./componentes/gad/gad";
import {BomberosComponent} from "./componentes/bomberos/bomberos";
import {LoginComponent} from "./componentes/login/login";
import {RegistrosPropiedadComponent} from "./componentes/registrosPropiedad/registrospropiedad";
import {EmpresaspublicasComponent} from "./componentes/empresasPublicas/empresaspublicas";
import {GobiernoCentralComponent} from "./componentes/gobiernoCentral/gobiernocentral";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'GADS', component: GadComponent},
  {path:'bomberos', component: BomberosComponent},
  {path:'registrosDeLaPropiedad', component: RegistrosPropiedadComponent},
  {path:'empresasPublicas', component: EmpresaspublicasComponent},
  {path:'gobiernoCentral', component: GobiernoCentralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
