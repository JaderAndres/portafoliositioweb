import { Injectable } from '@angular/core';
import { DetalleProyecto } from '../models/detalleproyecto';

@Injectable({
  providedIn: 'root',
})
export class DetalleProyectoService {

  //Servicio de Detalle Proyecto

  private detallesProyecto: DetalleProyecto[] = [
      {
        proyectoId: '1',
        tituloDetalle: 'Seguimiento de invertario en tienda de papeleria OfficeStore',
        descripcionCompleta: 'Este reporte de inventario en PowerBI proporciona una visión detallada del estado del inventario, incluyendo análisis de niveles de stock, movimientos recientes y tendencias a lo largo del tiempo. Permite a los usuarios tomar decisiones informadas sobre la gestión de inventarios.',
        objetivo: 'El objetivo principal de este proyecto es ofrecer una herramienta visual e interactiva que facilite el seguimiento y análisis del inventario, ayudando a optimizar la gestión de productos y reducir costos asociados a excesos o faltantes de stock.',
        metodologia: 'Se utilizó PowerBI para diseñar y desarrollar el reporte, integrando datos provenientes del sistema de gestión de inventarios de la tienda. Se aplicaron técnicas de modelado de datos y visualización para asegurar que la información sea clara y accesible.',
        imagenesDetalle: ['/imagenes/powerbi/inventario/p1.svg','/imagenes/powerbi/inventario/p2.svg'],
        interpretacionResultados: ['El análisis muestra que el producto XYZ bajó un 60% respecto al mes anterior, lo que indica una alta rotación una demanda constante.', 'Se identificaron períodos específicos con picos de inventario mayor a 5%, sugiriendo la necesidad de ajustar las órdenes de compra.'],
        recomendaciones: ['Implementar un sistema de alertas para niveles bajos de inventario en productos clave.', 'Revisar y ajustar las políticas de reabastecimiento basadas en las tendencias identificadas.'],
        enlaceExternoProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiMGY0NGI2YmUtZGJiNS00NjUxLThlMzEtNjY1YzM4NjIxZDNhIiwidCI6IjM4NTVmZDBlLTJlOWEtNGZjYy05NTUyLTg3OGEwZmU0YTA1ZCIsImMiOjR9',
        tecnologias: [{ nombre: 'PowerBI', imagen:'/imagenes/logos/powerbilogo.png' }, {nombre: 'excel', imagen:'/imagenes/logos/excellogo.png'}],
        repositorioGitHub: 'https://github.com/JaderAndres/AccelerateDevGHCopilot.git',
        observacionesAdicionales: 'Este proyecto fue desarrollado en colaboración con el equipo de logística para asegurar que las métricas clave fueran adecuadamente representadas.'
      }
  ];

  obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined {
    return this.detallesProyecto.find(detalle => detalle.proyectoId === proyectoId);
  }
}
