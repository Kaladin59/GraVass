import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Servicios

//Rutas
import {app_routing} from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/shared/header/header.component';
import { FooterComponent } from './Componentes/shared/footer/footer.component';
import { BodyComponent } from './Componentes/Shared/body/body.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NinosComponent } from './Componentes/ninos/ninos.component';
import { AboutComponent } from './Componentes/about/about.component';
import { CasamientosComponent } from './Componentes/casamientos/casamientos.component';
import { Cumples15Component } from './Componentes/cumples15/cumples15.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    NinosComponent,
    AboutComponent,
    CasamientosComponent,
    Cumples15Component
  ],
  imports: [
    BrowserModule    ,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
