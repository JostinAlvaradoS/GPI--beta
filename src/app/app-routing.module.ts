import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home";
import {GadComponent} from "./componentes/gad/gad";
import {BomberosComponent} from "./componentes/bomberos/bomberos";
import {LoginComponent} from "./componentes/login/login";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'GADS', component: GadComponent},
  {path:'bomberos', component: BomberosComponent},
  {path:'registrosDeLaPropiedad', component: BomberosComponent},
  {path:'empresasPublicas', component: BomberosComponent},
  {path:'gobiernoCentral', component: BomberosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
