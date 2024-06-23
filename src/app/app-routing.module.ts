import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home";
import {GadComponent} from "./componentes/gad/gad";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'gad', component: GadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
