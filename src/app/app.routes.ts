import { Routes } from '@angular/router';
import { DetalleProyecto } from './detalle-proyecto/detalle-proyecto';
import { Home } from './home/home';  // Ajusta la ruta según donde se genere

export const routes: Routes = [
  {
    path: '',
    component: Home  // Muestra el componente Home en la ruta raíz
  },
  {
    path: 'detalle-proyecto',
    component: DetalleProyecto
    // redirectTo: ''
  },
  {
    path: 'detalle-proyecto/:id',
    component: DetalleProyecto
  },
  {
    path: '**',  // Ruta comodín para 404
    redirectTo: ''
  }
];
