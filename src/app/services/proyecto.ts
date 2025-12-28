import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';


@Injectable({
  providedIn: 'root',
})
export class ProyectoService {

  //Servicio de Proyecto

  private proyectos: Proyecto[] = [
    {
      id: '1',
      tituloProyecto: 'Reporte de Inventario',
      presentacion: 'Este es un reporte de inventario desarrollado en PowerBI que muestra el estado actual del inventario de productos, incluyendo niveles de stock, movimientos recientes y análisis de tendencias.',
      imagenPresentacion: 'imagenes/powerbi/inventario/pres_inventario.jpeg',
      enlaceDetalle: '',
      tipoProyecto: 'PowerBI',
      fechaCreacion: new Date(),
    },
    {
      id: '2',
      tituloProyecto: 'Reporte de Ventas',
      presentacion: 'En este diseño de reporte de ventas en PowerBI, se presentan las métricas clave de rendimiento de ventas, análisis por región y tendencias a lo largo del tiempo.',
      imagenPresentacion: 'imagenes/powerbi/ventas/pres_ventas.jpeg',
      enlaceDetalle: '',
      tipoProyecto: 'PowerBI',
      fechaCreacion: new Date(),
    },
  ];

  obtenerListadoProyectos(): Proyecto[] {
    return this.proyectos;
  }
}


