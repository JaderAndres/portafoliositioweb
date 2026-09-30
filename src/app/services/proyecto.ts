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
      tituloProyecto: 'Online Retail Analytics: De Datos a Decisiones Estratégicas',
      presentacion: 'Análisis de 536K transacciones que identificó un riesgo crítico de concentración geográfica del 89% (£5.6M en riesgo) y diseñó plan de diversificación con ROI proyectado de 3x en 12 meses.',
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


