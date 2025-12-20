# Arquitectura del Proyecto

## 📐 Diagrama de Arquitectura General

```
┌─────────────────────────────────────────────────────────────┐
│                      Aplicación Angular                      │
│                   (index.html + main.ts)                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ↓
        ┌────────────────────────────────┐
        │   Componente Raíz (App)        │
        │  - Selector: app-root          │
        │  - RouterOutlet                │
        └────────────┬───────────────────┘
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
    ┌──────────────┐    ┌──────────────────┐
    │  Home        │    │ DetalleProyecto  │
    │  Ruta: /     │    │ Ruta: /          │
    │              │    │ detalle-         │
    │ Lista        │    │ proyecto/:id     │
    │ proyectos    │    │                  │
    │              │    │ Detalle único    │
    └──────┬───────┘    │ proyecto         │
           │            └────────┬─────────┘
           │                     │
    ┌──────┴──────┬──────────────┴──────┐
    ↓             ↓                     ↓
┌─────────────────────────────────────────────────────────────┐
│                       SERVICIOS                              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ProyectoService              DetalleProyectoService         │
│  ├─ obtenerListadoProyectos()  ├─ obtenerDetalleProyecto()  │
│  └─ Array: Proyecto[]          └─ Array: DetalleProyecto[]  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                    MODELOS DE DATOS                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Proyecto Interface         DetalleProyecto Interface        │
│  ├─ id: string             ├─ proyectoId: string            │
│  ├─ tituloProyecto: string ├─ tituloDetalle: string         │
│  ├─ presentacion: string   ├─ descripcionCompleta: string   │
│  ├─ imagenPresentacion     ├─ objetivo: string              │
│  ├─ tipoProyecto: string   ├─ metodologia?: string          │
│  └─ fechaCreacion: Date    ├─ imagenesDetalle: string[]     │
│                            ├─ tecnologias?: Array           │
│                            └─ ...                           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Flujo de Usuarios

### Flujo 1: Ver Listado de Proyectos

```
Usuario accede a http://localhost:4200/
       │
       ↓
Componente App se renderiza
       │
       ├─ Verifica ruta: '/'
       │
       ↓
Componente Home se carga
       │
       ├─ ngOnInit() se ejecuta
       │
       ↓
ProyectoService.obtenerListadoProyectos()
       │
       ├─ Retorna array de 2 Proyectos
       │
       ↓
Se asigna a this.proyectos
       │
       ├─ La plantilla renderiza con *ngFor
       │
       ↓
Usuario ve lista de proyectos
```

### Flujo 2: Ver Detalle de Proyecto

```
Usuario hace clic en "Ver Detalle"
       │
       ↓
Home.irDetalleProyecto('1')
       │
       ├─ Router.navigate(['/detalle-proyecto', '1'])
       │
       ↓
URL cambia a: http://localhost:4200/detalle-proyecto/1
       │
       ↓
Componente DetalleProyecto se carga
       │
       ├─ ngOnInit() se ejecuta
       │
       ↓
ActivatedRoute obtiene parámetro 'id' = '1'
       │
       ↓
DetalleProyectoService.obtenerDetalleProyecto('1')
       │
       ├─ Busca en array con find()
       │ ├─ Encuentra DetalleProyecto con proyectoId: '1'
       │ └─ Retorna objeto
       │
       ↓
Se asigna a this.detalleProyecto
       │
       ├─ La plantilla renderiza con *ngIf
       │
       ↓
Usuario ve detalles completos del proyecto
```

### Flujo 3: Volver al Listado

```
Usuario hace clic en "Volver"
       │
       ↓
DetalleProyecto.volver()
       │
       ├─ Router.navigate(['/'])
       │
       ↓
URL cambia a: http://localhost:4200/
       │
       ↓
Componente Home se renderiza nuevamente
       │
       ↓
Usuario ve lista de proyectos
```

---

## 🏗️ Capas de la Aplicación

### Capa de Presentación (Componentes)

**Responsabilidades**:
- Renderizar interfaces de usuario
- Capturar interacciones del usuario
- Mostrar datos

**Componentes**:
- `App` - Layout principal
- `Home` - Listado de proyectos
- `DetalleProyecto` - Detalle individual

**Ubicación**: `src/app/{home,detalle-proyecto}/`

### Capa de Lógica de Negocio (Servicios)

**Responsabilidades**:
- Gestionar datos
- Proporcionar métodos para acceder a datos
- Encapsular lógica

**Servicios**:
- `ProyectoService` - Gestiona proyectos
- `DetalleProyectoService` - Gestiona detalles

**Ubicación**: `src/app/services/`

### Capa de Datos (Modelos)

**Responsabilidades**:
- Definir estructura de datos
- Proveer tipado TypeScript

**Modelos**:
- `Proyecto` - Estructura de proyecto
- `DetalleProyecto` - Estructura de detalle

**Ubicación**: `src/app/models/`

### Capa de Enrutamiento

**Responsabilidades**:
- Mapear URLs a componentes
- Pasar parámetros a componentes

**Archivo**: `src/app/app.routes.ts`

```
URL Path                    → Componente
─────────────────────────────────────────
/                          → Home
/detalle-proyecto/:id      → DetalleProyecto
```

---

## 🔄 Ciclo de Vida de los Componentes

### Home (Página Principal)

```
Bootstrap (Carga inicial)
       │
       ↓
Constructor ejecuta
       │ └─ Inyección de Router
       │
       ↓
ngOnInit() ejecuta
       │ ├─ Llama ProyectoService.obtenerListadoProyectos()
       │ └─ Asigna resultado a this.proyectos
       │
       ↓
Plantilla renderiza
       │ └─ *ngFor itera this.proyectos
       │
       ↓
Espera interacción del usuario
       │
       ├─ Si click en "Ver Detalle"
       │ └─ Ejecuta irDetalleProyecto()
       │    ├─ Router.navigate() (va a DetalleProyecto)
       │    └─ Componente se destruye
       │
       └─ Si usuario recarga
         └─ Ciclo reinicia
```

### DetalleProyecto (Página de Detalle)

```
Bootstrap (Activar ruta)
       │
       ↓
Constructor ejecuta
       │ ├─ Inyección de ActivatedRoute
       │ ├─ Inyección de Router
       │ └─ Inyección de DetalleProyectoService
       │
       ↓
ngOnInit() ejecuta
       │ ├─ Lee parámetro :id de URL
       │ │  └─ this.proyectoId = route.snapshot.paramMap.get('id')
       │ │
       │ ├─ Obtiene detalle del servicio
       │ │  └─ DetalleProyectoService.obtenerDetalleProyecto(proyectoId)
       │ │
       │ └─ Asigna a this.detalleProyecto
       │
       ↓
Plantilla renderiza
       │ └─ *ngIf detalleProyecto
       │    ├─ Muestra título
       │    ├─ Muestra descripción
       │    ├─ Muestra imágenes
       │    └─ Muestra tecnologías
       │
       ↓
Espera interacción del usuario
       │
       ├─ Si click en "Volver"
       │ └─ Ejecuta volver()
       │    ├─ Router.navigate(['/']) (va a Home)
       │    └─ Componente se destruye
       │
       └─ Si usuario navega a otra URL
         └─ Ciclo de DetalleProyecto termina
```

---

## 📱 Inyección de Dependencias

### Patrón Singleton

```
Aplicación inicia
       │
       ↓
Bootstrap proporciona servicios con 'providedIn: root'
       │
       ├─ Una sola instancia de ProyectoService
       │
       ├─ Una sola instancia de DetalleProyectoService
       │
       └─ Compartida por toda la aplicación
       │
       ↓
Home inyecta ProyectoService (obtiene instancia compartida)
       │
       ↓
DetalleProyecto inyecta DetalleProyectoService (obtiene instancia compartida)
       │
       ↓
Si hay múltiples instancias del mismo componente,
comparten la misma instancia del servicio
```

---

## 🔌 Puntos de Integración

### API HTTP (Mejora Futura)

```
Cliente (Angular)
       │
       ├─ Servicio realiza HttpClient.get()
       │
       ↓
Servidor Backend
       │
       └─ GET /api/proyectos
       └─ GET /api/proyectos/:id
       │
       ↓
Datos en formato JSON
       │
       ↓
Cliente mapea a Interfaces (Proyecto, DetalleProyecto)
       │
       ↓
Componentes renderizan datos
```

### Base de Datos (Mejora Futura)

```
Backend API
       │
       ├─ Recibe request HTTP
       │
       ↓
Lógica de Backend
       │
       ├─ Accede a base de datos
       │
       ↓
Base de Datos
       │
       ├─ SQL: SELECT * FROM proyectos
       ├─ SQL: SELECT * FROM detalles WHERE proyecto_id = ?
       │
       ↓
Backend retorna JSON
       │
       ↓
Angular cliente recibe y mapea a Interfaces
```

---

## 🎨 Gestión de Estilos

### Estructura CSS

```
src/app/
├── styles.css (Estilos globales)
│
├── home/
│   └── home.css (Estilos específicos de Home)
│
└── detalle-proyecto/
    └── detalle-proyecto.css (Estilos específicos de Detalle)
```

### Jerarquía de Estilos

```
1. Estilos globales (styles.css)
   └─ Variables CSS
   └─ Clases base

2. Estilos de componente (home.css, detalle-proyecto.css)
   └─ Estilos específicos del componente
   └─ Sobrescriben globales si conflictan
   └─ Encapsulados al componente (View Encapsulation)
```

---

## 📦 Bundling y Build

### Desarrollo

```
ng serve
   ├─ Compila TypeScript → JavaScript
   ├─ Inyecta dependencias
   ├─ Genera sourcemaps
   └─ Sirve en http://localhost:4200
```

### Producción

```
ng build
   ├─ Optimiza código (minificación, tree-shaking)
   ├─ Separa en chunks
   ├─ Genera archivos en dist/
   └─ Ready para deployment
```

---

## 🧪 Estrategia de Testing

### Unitarios

```
Componente
   │
   ├─ Test de creación
   ├─ Test de ngOnInit
   ├─ Test de métodos
   └─ Test de cambios de plantilla

Servicio
   │
   ├─ Test de métodos
   ├─ Test de datos retornados
   └─ Mock de dependencias
```

### E2E (End-to-End)

```
Usuario interactúa
   │
   ├─ Carga página
   ├─ Hace click
   ├─ Navega
   └─ Verifica resultado
```

---

## 📊 Matriz de Responsabilidades

| Componente | Datos | Lógica | UI | Routing |
|-----------|-------|--------|-----|---------|
| **Home** | ✓ | ✓ | ✓ | ✓ |
| **DetalleProyecto** | ✓ | ✓ | ✓ | ✓ |
| **ProyectoService** | ✓ | ✓ | - | - |
| **DetalleProyectoService** | ✓ | ✓ | - | - |
| **App** | - | - | ✓ | ✓ |

---

## 🔐 Seguridad y Best Practices

### Encapsulación

- Propiedades privadas en servicios
- Métodos públicos controlados
- Acceso a datos solo a través de servicios

### Tipado Fuerte

- Todas las estructuras usan Interfaces
- Previene errores en tiempo de compilación
- Autocompletado en IDE

### Separación de Responsabilidades

- Componentes: Presentación
- Servicios: Lógica y datos
- Modelos: Estructura

### Reutilización

- Servicios compartidos
- Componentes autónomos
- Código modular

---

## 🚀 Escalabilidad Futura

### Nuevos Componentes
```
src/app/admin/          # Panel administrativo
src/app/galeria/        # Galería de imágenes
src/app/blog/           # Blog de artículos
```

### Nuevos Servicios
```
src/app/services/auth.service.ts         # Autenticación
src/app/services/api.service.ts          # Llamadas HTTP
src/app/services/storage.service.ts      # LocalStorage
```

### Interceptores
```
src/app/interceptors/http.interceptor.ts # Logging
src/app/interceptors/error.interceptor.ts # Manejo de errores
```

### Guards de Ruta
```
src/app/guards/auth.guard.ts             # Proteger rutas
src/app/guards/unsaved-changes.guard.ts  # Confirmar salida
```

---

## 📈 Métricas de Desempeño

### Bundle Size
```
main.js      - Código principal
vendor.js    - Dependencias
styles.css   - Estilos
```

### Optimizaciones Potenciales
- Lazy loading de módulos
- Code splitting
- Compresión de imágenes
- Cacheing de servicios
