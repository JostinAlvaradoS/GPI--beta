import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./auxiliares/header/header";
import {FooterComponent} from "./auxiliares/footer/footer";
import {SidebarComponent} from "./auxiliares/sidebar/sidebar";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
