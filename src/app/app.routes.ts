import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Componentes/home/home.component';
import {NinosComponent  } from './Componentes/ninos/ninos.component';
import {CasamientosComponent} from './Componentes/Casamientos/casamientos.component';
import {Cumples15Component} from './Componentes/cumples15/cumples15.component';
import {AboutComponent} from './Componentes/About/About.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'niños', component: NinosComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
