# Portafolio - Aplicación Angular para Visualización de Proyectos

Una aplicación web moderna desarrollada con **Angular 20.3** que presenta un portafolio de proyectos, con énfasis en reportes de **Power BI**. La aplicación permite visualizar un listado de proyectos y acceder a información detallada de cada uno.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso y Desarrollo](#uso-y-desarrollo)
- [Arquitectura](#arquitectura)
- [Referencias de Código](#referencias-de-código)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Scripts Disponibles](#scripts-disponibles)

---

## ✨ Características

- **Listado de proyectos**: Visualización de proyectos en la página principal
- **Detalle de proyectos**: Acceso a información completa y detallada de cada proyecto
- **Navegación intuitiva**: Enrutamiento eficiente entre vistas
- **Diseño responsivo**: Interfaz adaptable a diferentes dispositivos
- **SSR (Server-Side Rendering)**: Soporte para renderizado en servidor con Angular SSR
- **Arquitectura modular**: Componentes, servicios y modelos bien organizados

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── models/                    # Interfaces y modelos de datos
│   │   ├── proyecto.ts           # Interfaz Proyecto
│   │   └── detalleproyecto.ts    # Interfaz DetalleProyecto
│   ├── services/                  # Servicios de negocio
│   │   ├── proyecto.ts           # Servicio ProyectoService
│   │   └── detalleproyecto.ts    # Servicio DetalleProyectoService
│   ├── home/                      # Componente de página principal
│   │   ├── home.ts               # Lógica del componente
│   │   ├── home.html             # Plantilla HTML
│   │   └── home.css              # Estilos
│   ├── detalle-proyecto/          # Componente de detalle
│   │   ├── detalle-proyecto.ts   # Lógica del componente
│   │   ├── detalle-proyecto.html # Plantilla HTML
│   │   └── detalle-proyecto.css  # Estilos
│   ├── app.ts                     # Componente raíz
│   ├── app.config.ts             # Configuración de la aplicación
│   └── app.routes.ts             # Definición de rutas
├── server.ts                      # Archivo de servidor (SSR)
├── main.ts                        # Punto de entrada de la aplicación
└── styles.css                     # Estilos globales
public/
└── imagenes/                      # Recursos de imágenes
    ├── logos/                     # Logos de tecnologías
    └── powerbi/                   # Imágenes de proyectos Power BI
```

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js**: v18+ (recomendado v20+)
- **npm**: v10+
- **Angular CLI**: v20.3.9+

### Pasos de Instalación

1. **Clonar o descargar el repositorio**
   ```bash
   cd c:\PortafolioSitioWeb\portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar la instalación**
   ```bash
   ng version
   ```

---

## 💻 Uso y Desarrollo

### Servidor de Desarrollo

Para iniciar un servidor de desarrollo local:

```bash
npm start
```

O equivalentemente:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`. Los cambios en los archivos se reflejarán automáticamente en el navegador.

### Construir para Producción

Para compilar el proyecto para producción:

```bash
npm run build
```

Los artefactos compilados se almacenarán en el directorio `dist/`.

### Compilación en Modo Watch

Para compilar el proyecto en modo observación:

```bash
npm run watch
```

### Ejecutar Pruebas Unitarias

Para ejecutar pruebas unitarias con **Karma**:

```bash
npm test
```

### Servidor SSR

Para ejecutar la aplicación con renderizado del lado del servidor:

```bash
npm run serve:ssr:portafolio
```

---

## 🏗️ Arquitectura

### Modelos de Datos

#### **Interfaz `Proyecto`**
```typescript
export interface Proyecto {
  id: string;                        // Identificador único
  tituloProyecto: string;           // Nombre del proyecto
  presentacion: string;              // Descripción breve
  imagenPresentacion: string;        // URL/ruta de imagen
  enlaceDetalle?: string;            // Enlace a detalle
  tipoProyecto: string;              // Tipo (ej: "PowerBI")
  fechaCreacion: Date;               // Fecha de creación
}
```

#### **Interfaz `DetalleProyecto`**
```typescript
export interface DetalleProyecto {
  proyectoId: string;                       // ID del proyecto referenciado
  tituloDetalle: string;                    // Título del detalle
  descripcionCompleta: string;              // Descripción completa
  objetivo: string;                        // Objetivo del proyecto
  metodologia?: string;                    // Metodología utilizada
  imagenesDetalle: string[];               // Array de imágenes adicionales
  interpretacionResultados?: string[];     // Array de interpretaciones
  enlaceExternoProyecto?: string;          // Link externo (ej: Power BI)
  tecnologias?: Array<{                    // Tecnologías usadas
    nombre: string;
    imagen?: string;
  }>;
  repositorio?: string;                    // Enlace al repositorio
  observacionesAdicionales?: string;       // Notas adicionales
}
```

### Servicios

#### **`ProyectoService`**

Servicio inyectable encargado de gestionar la lista de proyectos.

**Ubicación**: `src/app/services/proyecto.ts`

**Métodos**:
- `obtenerListadoProyectos(): Proyecto[]`
  - Retorna el listado completo de proyectos
  - Uso: Componente `Home` para mostrar todos los proyectos

**Datos**:
- Contiene un array privado `proyectos` con datos hardcodeados de dos proyectos: "Reporte de Inventario" y "Reporte de Ventas"

#### **`DetalleProyectoService`**

Servicio inyectable para recuperar información detallada de proyectos específicos.

**Ubicación**: `src/app/services/detalleproyecto.ts`

**Métodos**:
- `obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined`
  - Busca y retorna el detalle de un proyecto por ID
  - Parámetro: `proyectoId` - Identificador del proyecto
  - Retorna: Objeto `DetalleProyecto` o `undefined` si no existe

**Datos**:
- Array privado `detallesProyecto` con información detallada del proyecto con ID '1'

### Componentes

#### **`App` (Componente Raíz)**

Componente principal de la aplicación.

**Ubicación**: `src/app/app.ts`

**Propiedades**:
- `title: Signal<string>` - Título de la aplicación ("Portafolio de Power BI")

**Imports**: `RouterOutlet` para renderizar componentes según rutas

#### **`Home`**

Componente que muestra el listado de proyectos en la página principal.

**Ubicación**: `src/app/home/home.ts`

**Propiedades**:
- `proyectos: Proyecto[]` - Array de proyectos a mostrar

**Métodos**:
- `ngOnInit(): void`
  - Ciclo de vida: Se ejecuta al inicializar el componente
  - Obtiene la lista de proyectos mediante `ProyectoService`

- `irDetalleProyecto(proyectoId: string): void`
  - Navega al componente de detalle del proyecto
  - Parámetro: `proyectoId` - ID del proyecto seleccionado
  - Ruta: `/detalle-proyecto/{proyectoId}`

**Dependencias Inyectadas**:
- `ProyectoService` - Para obtener listado de proyectos
- `Router` - Para navegación

#### **`DetalleProyecto`**

Componente para visualizar detalles completos de un proyecto específico.

**Ubicación**: `src/app/detalle-proyecto/detalle-proyecto.ts`

**Propiedades**:
- `proyectoId: string | null` - ID del proyecto obtenido de la URL
- `detalleProyecto: DetalleProyectoModel | null` - Datos del proyecto

**Métodos**:
- `ngOnInit(): void`
  - Obtiene el parámetro `id` de la ruta
  - Llama a `DetalleProyectoService` para recuperar los detalles
  - Asigna los datos a la propiedad `detalleProyecto`

- `volver(): void`
  - Navega de regreso a la página principal (`/`)

**Dependencias Inyectadas**:
- `DetalleProyectoService` - Obtener detalle del proyecto
- `ActivatedRoute` - Acceder a parámetros de la ruta
- `Router` - Navegación

---

## 📚 Referencias de Código

### Inyección de Dependencias

Este proyecto utiliza **inyección de dependencias** de Angular:

```typescript
// En servicios (decorador @Injectable)
@Injectable({
  providedIn: 'root',
})
export class ProyectoService { ... }

// En componentes (método inject)
private proyectoService = inject(ProyectoService);
```

### Enrutamiento

Las rutas se definen en `app.routes.ts`:

```typescript
// Ruta a Home (página principal)
{ path: '', component: Home }

// Ruta a Detalle de Proyecto
{ path: 'detalle-proyecto/:id', component: DetalleProyecto }
```

### Navegación Programática

```typescript
// Desde el componente Home
this.router.navigate(['/detalle-proyecto', proyectoId]);

// Desde el componente DetalleProyecto
this.router.navigate(['/']);
```

### Obtención de Parámetros de Ruta

```typescript
// En ngOnInit
this.proyectoId = this.route.snapshot.paramMap.get('id');
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Angular** | 20.3.0 | Framework principal |
| **Angular Common** | 20.3.0 | Directivas y pipes comunes |
| **Angular Router** | 20.3.0 | Enrutamiento |
| **Angular SSR** | 20.3.9 | Renderizado en servidor |
| **TypeScript** | 5.9.2 | Lenguaje de programación |
| **RxJS** | 7.8.0 | Programación reactiva |
| **Express** | 5.1.0 | Servidor para SSR |
| **Karma** | 6.4.0 | Test runner |
| **Jasmine** | 5.9.0 | Framework de testing |

---

## 📦 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **start** | `npm start` | Inicia el servidor de desarrollo |
| **build** | `npm run build` | Construye para producción |
| **watch** | `npm run watch` | Construcción en modo observación |
| **test** | `npm test` | Ejecuta pruebas unitarias |
| **serve:ssr** | `npm run serve:ssr:portafolio` | Ejecuta con SSR |

---

## 📄 Configuración

### `package.json`

Define las dependencias, scripts y configuración del proyecto:

- **Prettier**: Configurado para formateo con ancho de línea de 100 caracteres y comillas simples
- **Angular**: Versión 20.3.0 (última estable)

### `tsconfig.json`

Configuración de TypeScript para compilación y tipos.

### `angular.json`

Configuración del build de Angular CLI, incluyendo opciones de desarrollo y producción.

---

## 🔍 Flujo de la Aplicación

```
1. Usuario accede a http://localhost:4200/
   ↓
2. Se carga el componente App (raíz)
   ↓
3. Se renderiza Home (página principal)
   ↓
4. Home llama a ProyectoService.obtenerListadoProyectos()
   ↓
5. Se muestran los proyectos en la interfaz
   ↓
6. Usuario hace clic en un proyecto
   ↓
7. Se ejecuta Home.irDetalleProyecto(proyectoId)
   ↓
8. Router navega a /detalle-proyecto/{id}
   ↓
9. Se carga DetalleProyecto con el ID de la URL
   ↓
10. DetalleProyecto llama a DetalleProyectoService.obtenerDetalleProyecto(id)
    ↓
11. Se muestran los detalles del proyecto
    ↓
12. Usuario puede volver al home con el botón "Volver"
```

---

## 📞 Contacto y Soporte

Para más información sobre Angular y sus características, visita:
- [Documentación oficial de Angular](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)

---

**Versión del Proyecto**: 0.0.0  
**Generado con**: Angular CLI v20.3.9  
**Última actualización**: Noviembre 2025 - 2026
