import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./auxiliares/header/header";
import {FooterComponent} from "./auxiliares/footer/footer";
import {SidebarComponent} from "./auxiliares/sidebar/sidebar";
import {HomeComponent} from "./componentes/home/home";
import {GadComponent} from "./componentes/gad/gad";
import {BomberosComponent} from "./componentes/bomberos/bomberos";
import {LoginComponent} from "./componentes/login/login";
import {RegistrosPropiedadComponent} from "./componentes/registrosPropiedad/registrospropiedad";
import {GobiernoCentralComponent} from "./componentes/gobiernoCentral/gobiernocentral";
import {EmpresaspublicasComponent} from "./componentes/empresasPublicas/empresaspublicas";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, SidebarComponent, HomeComponent, GadComponent, BomberosComponent,
    LoginComponent, RegistrosPropiedadComponent, GobiernoCentralComponent, EmpresaspublicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
