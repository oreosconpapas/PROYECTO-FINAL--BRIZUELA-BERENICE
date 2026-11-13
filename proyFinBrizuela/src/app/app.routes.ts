import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';
import { Habitats } from './pages/habitats/habitats';
import { Conservacion } from './pages/conservacion/conservacion';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: Productos },
    { path: 'nosotros', component: Nosotros },
    { path: 'contacto', component: Contacto },
    { path: 'habitats', component: Habitats },
    { path: 'conservacion', component: Conservacion },
    { path: '**', component: NotFound }
];
