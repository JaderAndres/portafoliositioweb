export interface Proyecto {
  id: string;
  tituloProyecto: string; // Nombre del proyecto
  presentacion: string;   // Breve descripción o resumen
  imagenPresentacion: string; // URL o ruta de la imagen
  enlaceDetalle?: string; // Enlace a la página de detalle del proyecto
  tipoProyecto: string;   // Ejemplo: "Web", "PowerBI", "Data Science", etc.
  fechaCreacion: Date;
}


