# Documentación - Modelos de Datos

## Descripción General

Los modelos de datos definen la estructura de los objetos que se utilizan en la aplicación. Se encuentran en la carpeta `src/app/models/`.

---

## Interfaz `Proyecto`

**Archivo**: `src/app/models/proyecto.ts`

### Propósito
Define la estructura de un proyecto que se mostrará en el listado principal de la aplicación.

### Definición

```typescript
export interface Proyecto {
  id: string;                        // Identificador único del proyecto
  tituloProyecto: string;           // Nombre o título del proyecto
  presentacion: string;              // Descripción breve (resumen)
  imagenPresentacion: string;        // URL o ruta relativa de la imagen de portada
  enlaceDetalle?: string;            // Enlace opcional a la página de detalle
  tipoProyecto: string;              // Categoría del proyecto (ej: "PowerBI", "Web", etc.)
  fechaCreacion: Date;               // Fecha de creación del proyecto
}
```

### Propiedades Detalladas

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `string` | ✓ | Identificador único. Usado para referencias en DetalleProyecto |
| `tituloProyecto` | `string` | ✓ | Nombre del proyecto que se muestra en la interfaz |
| `presentacion` | `string` | ✓ | Descripción corta (una o dos oraciones) |
| `imagenPresentacion` | `string` | ✓ | Ruta de la imagen (relativa o URL absoluta) |
| `enlaceDetalle` | `string?` | ✗ | URL adicional del proyecto (opcional) |
| `tipoProyecto` | `string` | ✓ | Clasificación del proyecto |
| `fechaCreacion` | `Date` | ✓ | Fecha de creación en formato Date |

### Ejemplo de Uso

```typescript
const proyecto: Proyecto = {
  id: '1',
  tituloProyecto: 'Reporte de Inventario',
  presentacion: 'Reporte de inventario desarrollado en PowerBI que muestra el estado actual...',
  imagenPresentacion: '/imagenes/powerbi/inventario/pres_inventario.jpeg',
  enlaceDetalle: 'https://app.powerbi.com/...',
  tipoProyecto: 'PowerBI',
  fechaCreacion: new Date('2024-11-21')
};
```

### Relaciones

- **Usado por**: `ProyectoService.obtenerListadoProyectos()`
- **Consumido por**: Componente `Home`
- **Referenciado en**: `DetalleProyecto` mediante `proyectoId`

---

## Interfaz `DetalleProyecto`

**Archivo**: `src/app/models/detalleproyecto.ts`

### Propósito
Define la estructura de información detallada sobre un proyecto específico.

### Definición

```typescript
import { Proyecto } from "./proyecto";

export interface DetalleProyecto {
  proyectoId: string;                       // ID del proyecto referenciado
  tituloDetalle: string;                    // Título específico del detalle
  descripcionCompleta: string;              // Descripción extendida del proyecto
  objetivo: string;                        // Objetivo principal del proyecto
  metodologia?: string;                    // Metodología empleada (opcional)
  imagenesDetalle: string[];               // Array de URLs/rutas de imágenes adicionales
  interpretacionResultados?: string[];     // Array de interpretaciones de resultados
  enlaceExternoProyecto?: string;          // Link externo al proyecto (ej: Power BI live)
  tecnologias?: {                          // Tecnologías utilizadas
    nombre: string;                        // Nombre de la tecnología
    imagen?: string;                       // Logo/icono de la tecnología
  }[];
  repositorio?: string;                    // URL del repositorio (GitHub, etc.)
  observacionesAdicionales?: string;       // Notas o comentarios finales
}
```

### Propiedades Detalladas

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `proyectoId` | `string` | ✓ | ID del Proyecto al que pertenece |
| `tituloDetalle` | `string` | ✓ | Título del detalle (puede diferir del proyecto) |
| `descripcionCompleta` | `string` | ✓ | Descripción larga y detallada |
| `objetivo` | `string` | ✓ | Objetivo o meta del proyecto |
| `metodologia` | `string?` | ✗ | Metodología aplicada (Agile, Waterfall, etc.) |
| `imagenesDetalle` | `string[]` | ✓ | Array de rutas de imágenes adicionales |
| `interpretacionResultados` | `string[]?` | ✗ | Array de análisis de resultados |
| `enlaceExternoProyecto` | `string?` | ✗ | Link externo (Power BI, Portfolio, etc.) |
| `tecnologias` | `Array<{nombre, imagen}>?` | ✗ | Tecnologías usadas con logos |
| `repositorio` | `string?` | ✗ | URL del repositorio |
| `observacionesAdicionales` | `string?` | ✗ | Notas adicionales |

### Ejemplo de Uso

```typescript
const detalleProyecto: DetalleProyecto = {
  proyectoId: '1',
  tituloDetalle: 'Seguimiento de inventario en tienda de papelería OfficeStore',
  descripcionCompleta: 'Este reporte de inventario en PowerBI proporciona...',
  objetivo: 'El objetivo principal es ofrecer una herramienta visual...',
  metodologia: 'Se utilizó PowerBI para diseñar el reporte...',
  imagenesDetalle: [
    '/imagenes/powerbi/inventario/p1.svg',
    '/imagenes/powerbi/inventario/p2.svg'
  ],
  interpretacionResultados: [
    'El análisis muestra que ciertos productos tienen alta rotación...',
    'Se identificaron períodos específicos con picos de inventario...'
  ],
  enlaceExternoProyecto: 'https://app.powerbi.com/view?r=...',
  tecnologias: [
    { nombre: 'PowerBI', imagen: '/imagenes/logos/powerbilogo.png' },
    { nombre: 'Excel', imagen: '/imagenes/logos/excellogo.png' }
  ],
  repositorio: 'https://github.com/usuario/inventario-repo',
  observacionesAdicionales: 'Este proyecto fue desarrollado en colaboración...'
};
```

### Relaciones

- **Usado por**: `DetalleProyectoService.obtenerDetalleProyecto(id)`
- **Consumido por**: Componente `DetalleProyecto`
- **Referencia a**: `Proyecto` mediante `proyectoId`

---

## Consideraciones de Diseño

### Campos Opcionales
Los campos marcados con `?` son opcionales. Esto permite flexibilidad al crear nuevos proyectos sin requerir todos los detalles.

### Array de Tecnologías
Las tecnologías se definen como objetos anidados para permitir tanto el nombre como una imagen asociada.

### Imágenes
Se recomienda usar rutas relativas comenzando con `/` para referencia a la carpeta `public/`.

### Fechas
El tipo `Date` se utiliza para `fechaCreacion` en `Proyecto` para permitir operaciones de ordenamiento y filtrado.

---

## Extensiones Futuras

Si se requiere agregar nuevas propiedades a los modelos:

1. **Para Proyecto**: Agregar campos como `autor`, `estado`, `etiquetas`
2. **Para DetalleProyecto**: Agregar `enlacesRecursos`, `documentacion`, `resultadosMetricas`
