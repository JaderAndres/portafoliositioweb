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
        descripcionCompleta: 'El negocio de papeleria OfficeStore, vende una amplia variedad de productos de papelería, desde artículos de oficina hasta material escolar.',
        problema: 'En los últimos meses, la empresa detectó una disminución en las ventas en ciertas regiones y necesita identificar qué categorías, productos o segmentos de clientes están influyendo en esa caída, para definir acciones comerciales.',
        metodologia: 'Se utilizó PowerBI para diseñar y desarrollar el reporte, integrando datos provenientes del sistema de gestión de inventarios de la tienda. Se aplicaron técnicas de modelado de datos y visualización para asegurar que la información sea clara y accesible.',
        indicadoresClave: ['Stock actual', 'Valor total de inventario'],
        imagenesDetalle: ['imagenes/powerbi/inventario/p1.svg','imagenes/powerbi/inventario/p2.svg'],
        insights: [
          {
            titulo: 'Rotación elevada en producto clave',
            insight: 'Caída del 60% vs mes anterior (producto XYZ)',
            porqueEsImportante: 'Alta rotación/variación de demanda que reduce el stock rápidamente.',
            accion: 'Ajustar niveles de stock mínimo y revisar frecuencia de reabastecimiento para el producto XYZ.'
          },
          {
            titulo: 'Picos de sobreinventario',
            insight: 'Períodos con inventario > 5% por encima del nivel esperado',
            porqueEsImportante: 'Órdenes de compra no alineadas con el patrón real de demanda.',
            accion: 'Recalibrar puntos de pedido y tamaños de lote según las tendencias identificadas.'
          }
        ],
        recomendaciones: ['Implementar un sistema de alertas para niveles bajos de inventario en productos clave.', 'Revisar y ajustar las políticas de reabastecimiento basadas en las tendencias identificadas.'],
        enlaceExternoProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiMGY0NGI2YmUtZGJiNS00NjUxLThlMzEtNjY1YzM4NjIxZDNhIiwidCI6IjM4NTVmZDBlLTJlOWEtNGZjYy05NTUyLTg3OGEwZmU0YTA1ZCIsImMiOjR9',
        tecnologias: [{ nombre: 'PowerBI', imagen:'imagenes/logos/powerbilogo.png' }, {nombre: 'excel', imagen:'imagenes/logos/excellogo.png'}, {nombre: 'angular', imagen:'imagenes/logos/angularlogo.png'}],
      },
      {
        proyectoId: '2',
        tituloDetalle: 'Online Retail Analytics: De Datos a Decisiones Estratégicas',
        descripcionCompleta: 'Online Retail es un distribuidor mayorista B2B de productos decorativos y regalos con sede en Reino Unido. Opera desde 2010 atendiendo minoristas en 37 países con un modelo de venta directa online.',
        problema: 'A pesar de un crecimiento del 15% YoY y £6.3M en ventas netas, la dirección sospecha de vulnerabilidades ocultas en el modelo de negocio que pueden afectar la rentabilidad a largo plazo. Se requiere un análisis profundo para identificar riesgos y oportunidades estratégicas.',
        metodologia: 'Este dashboard inicia con una visión ejecutiva que muestra el estado actual del negocio. Luego se compara el desempeño con períodos anteriores y metas para dar contexto. Posteriormente se analiza el desempeño por categoría y región para identificar causas. Finalmente, se muestran alertas y rankings que permiten tomar acciones concretas.',
        indicadoresClave: ['Ventas netas', 'Tasa de devolución', 'Concentración geográfica', 'Clientes recurrentes', 'Promedio de venta', 'Top de productos más vendidos'],
        imagenesDetalle: [],
        insights: [
          {
            titulo: '1. Riesgo de concentración',
            insight: 'Existe una concentración crítica de ingresos en el Reino Unido, mercado que representa el 89% del volumen total de ventas.',
            porqueEsImportante: 'Una eventual recesión en esta región pondría en riesgo £5.6M, comprometiendo severamente la estabilidad operativa y la rentabilidad neta de la compañía.',
            accion: 'Iniciar un plan de expansión en mercados secundarios para reducir la dependencia del Reino Unido en los próximos meses.'
          },
          {
            titulo: '2. Crisis de retención',
            insight: '83% de los clientes compran solo 1-2 veces. Se están perdiendo £1.2M en repeat business por falta de programa de fidelización.',
            porqueEsImportante: 'La retención de clientes es fundamental para el crecimiento sostenible del negocio. Una alta tasa de churn indica que el modelo actual no está atraiendo a los clientes de forma recurrente.',
            accion: 'Implementar un programa de fidelización para aumentar la retención de clientes. Se recomienda la implementación de un programa de puntos para incentivar la compra recurrente.'
          },
          {
            titulo: '3. Alta Tasa de Devolución',
            insight: 'La tasa de devoluciones es de 5.4%',
            porqueEsImportante:'Un cliente que devuelve un producto tiene una alta probabilidad de no volver a comprar, costos logisticos de retorno y salida de inventario sin beneficio, lo cual afecta las finanzas.',
            accion: 'Adicionar un campo de "Motivo de devolucíon" para recolectar datos cualitativos y realizar un análisis para posteriormente realizar las acciones necesarias según lo descubierto.'
          }
        ],
        recomendaciones: ['Implementar un sistema de alertas para niveles bajos de inventario en productos clave.', 'Revisar y ajustar las políticas de reabastecimiento basadas en las tendencias identificadas.', 'Diversificar las ventas a otros mercados para reducir la dependencia de un solo mercado.'],
        enlaceExternoProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiMGY0NGI2YmUtZGJiNS00NjUxLThlMzEtNjY1YzM4NjIxZDNhIiwidCI6IjM4NTVmZDBlLTJlOWEtNGZjYy05NTUyLTg3OGEwZmU0YTA1ZCIsImMiOjR9',
        tecnologias: [{nombre: 'excel', imagen:'imagenes/logos/excellogo.png'}],
        referencias: ['Dataset: Chen, D. (2015). Online Retail [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5BW33.', 'IA de apoyo: chatgpt.com, claude.ai'],
      }
  ];

  obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined {
    return this.detallesProyecto.find(detalle => detalle.proyectoId === proyectoId);
  }
}
