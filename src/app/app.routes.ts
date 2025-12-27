// import { Routes } from '@angular/router';
// import { DetalleProyecto } from './detalle-proyecto/detalle-proyecto';
// import { Home } from './home/home';  // Ajusta la ruta según donde se genere

// export const routes: Routes = [
//   {
//     path: '',
//     component: Home  // Muestra el componente Home en la ruta raíz
//   },
//   {
//     path: 'detalle-proyecto',
//     // component: DetalleProyecto
//     loadComponent: () => import('./detalle-proyecto/detalle-proyecto')
//       .then(m => m.DetalleProyecto)
//   },
//   {
//     path: 'detalle-proyecto/:id',
//     // component: DetalleProyecto,
//     loadComponent: () => import('./detalle-proyecto/detalle-proyecto')
//       .then(m => m.DetalleProyecto)
//   },
//   {
//     path: '**',  // Ruta comodín para 404
//     redirectTo: ''
//   }
// ];

import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'detalle-proyecto',
    loadComponent: () =>
      import('./detalle-proyecto/detalle-proyecto')
        .then(m => m.DetalleProyecto),
  },
  {
    path: 'detalle-proyecto/:id',
    loadComponent: () =>
      import('./detalle-proyecto/detalle-proyecto')
        .then(m => m.DetalleProyecto),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
