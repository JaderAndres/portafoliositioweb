import { Proyecto } from "./proyecto";

export interface DetalleProyecto{
    proyectoId: string;
    tituloDetalle: string;
    descripcionCompleta: string;
    objetivo: string;
    metodologia?: string;
    imagenesDetalle: string[]; // URLs o rutas de imágenes adicionales
    interpretacionResultados?: string[];
    recomendaciones: string[]; // Lista de recomendaciones basadas en los resultados del proyecto
    enlaceExternoProyecto?: string;
    tecnologias?: {
      nombre: string;
      imagen?: string; // URL o ruta de la imagen del logo de la tecnología
    }[];  // Lista de tecnologías utilizadas
    repositorioGitHub?: string;  // Enlace al repositorio del proyecto (si aplica)
    observacionesAdicionales?: string;
}
