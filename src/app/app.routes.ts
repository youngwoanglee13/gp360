import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    { path : '', redirectTo: '/inicio', pathMatch: 'full' },
    { path : 'inicio', component: InicioComponent },
    { path : 'inicio/:nombre', component: ClienteComponent }
];
