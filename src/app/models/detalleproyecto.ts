import { Proyecto } from "./proyecto";

export interface InsightDetalleProyecto {
  titulo: string;
  insight: string;
  porqueEsImportante: string;
  accion: string;
}

export interface DetalleProyecto{
    proyectoId: string;
    tituloDetalle: string;
    descripcionCompleta: string;
    problema: string;
    metodologia?: string;
    indicadoresClave?: string[]; // Lista de indicadores clave detectados
    imagenesDetalle: string[]; // URLs o rutas de imágenes adicionales
    insights?: InsightDetalleProyecto[]; // Lista de insights o hallazgos clave derivados del proyecto
    recomendaciones: string[]; // Lista de recomendaciones basadas en los resultados del proyecto
    enlaceExternoProyecto?: string;
    tecnologias?: {
      nombre: string;
      imagen?: string; // URL o ruta de la imagen del logo de la tecnología
    }[];  // Lista de tecnologías utilizadas
    referencias?: string[]; // Lista de referencias
}
