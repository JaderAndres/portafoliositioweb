# Guía de Referencia Rápida

## 📋 Índice de Archivos Principales

### Modelos de Datos
- **`src/app/models/proyecto.ts`** - Interfaz Proyecto para listado
- **`src/app/models/detalleproyecto.ts`** - Interfaz DetalleProyecto con info completa

### Servicios
- **`src/app/services/proyecto.ts`** - ProyectoService (obtiene listado)
- **`src/app/services/detalleproyecto.ts`** - DetalleProyectoService (obtiene detalles)

### Componentes
- **`src/app/app.ts`** - Componente raíz (App)
- **`src/app/home/home.ts`** - Página principal con listado
- **`src/app/detalle-proyecto/detalle-proyecto.ts`** - Página de detalles

### Enrutamiento
- **`src/app/app.routes.ts`** - Definición de rutas
- **`src/app/app.config.ts`** - Configuración de la app

### Archivos Estáticos
- **`public/imagenes/`** - Recursos de imágenes

---

## 🔍 Búsqueda Rápida de Métodos

### ProyectoService
```
obtenerListadoProyectos(): Proyecto[]
├─ Ubicación: src/app/services/proyecto.ts:12
├─ Retorna: Array de 2 proyectos
└─ Usado por: Home.ngOnInit()
```

### DetalleProyectoService
```
obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined
├─ Ubicación: src/app/services/detalleproyecto.ts:22
├─ Parámetro: ID del proyecto (ej: '1')
└─ Usado por: DetalleProyecto.ngOnInit()
```

### Home
```
irDetalleProyecto(proyectoId: string): void
├─ Ubicación: src/app/home/home.ts:21
├─ Acción: Router.navigate(['/detalle-proyecto', proyectoId])
└─ Disparador: Click en botón "Ver Detalle"
```

### DetalleProyecto
```
volver(): void
├─ Ubicación: src/app/detalle-proyecto/detalle-proyecto.ts:38
├─ Acción: Router.navigate(['/'])
└─ Disparador: Click en botón "Volver"
```

---

## 🛣️ Rutas de la Aplicación

| Ruta | Componente | Propósito |
|------|-----------|----------|
| `/` | `Home` | Página principal con listado |
| `/detalle-proyecto/:id` | `DetalleProyecto` | Detalles de un proyecto |

---

## 📊 Flujo de Datos

### Obtener Listado (Home)
```
Home.ngOnInit()
  ↓
ProyectoService.obtenerListadoProyectos()
  ↓
Retorna: Proyecto[]
  ↓
Asigna a: this.proyectos
  ↓
Renderiza en: home.html con *ngFor
```

### Obtener Detalle (DetalleProyecto)
```
URL: /detalle-proyecto/1
  ↓
DetalleProyecto.ngOnInit()
  ↓
route.snapshot.paramMap.get('id') → '1'
  ↓
DetalleProyectoService.obtenerDetalleProyecto('1')
  ↓
Retorna: DetalleProyecto | undefined
  ↓
Asigna a: this.detalleProyecto
  ↓
Renderiza en: detalle-proyecto.html con *ngIf
```

---

## 🔗 Relaciones Entre Clases

```
Proyecto (Interfaz)
  ├─ Usado en: ProyectoService.obtenerListadoProyectos()
  ├─ Consumido por: Home.proyectos
  └─ Contiene: id, tituloProyecto, presentacion, etc.

DetalleProyecto (Interfaz)
  ├─ Usado en: DetalleProyectoService.obtenerDetalleProyecto()
  ├─ Consumido por: DetalleProyecto.detalleProyecto
  ├─ Referencia a: Proyecto (mediante proyectoId)
  └─ Contiene: Información completa del proyecto

ProyectoService
  ├─ Inyectado en: Home
  ├─ Método: obtenerListadoProyectos()
  └─ Retorna: Proyecto[]

DetalleProyectoService
  ├─ Inyectado en: DetalleProyecto
  ├─ Método: obtenerDetalleProyecto(id)
  └─ Retorna: DetalleProyecto | undefined

Home
  ├─ Ruta: /
  ├─ Inyecciones: ProyectoService, Router
  ├─ Propiedades: proyectos[]
  ├─ Métodos: ngOnInit(), irDetalleProyecto()
  └─ Navegación a: /detalle-proyecto/:id

DetalleProyecto
  ├─ Ruta: /detalle-proyecto/:id
  ├─ Inyecciones: DetalleProyectoService, ActivatedRoute, Router
  ├─ Propiedades: proyectoId, detalleProyecto
  ├─ Métodos: ngOnInit(), volver()
  └─ Navegación a: /

App
  ├─ Selector: app-root
  ├─ Propiedades: title (Signal)
  ├─ Imports: RouterOutlet
  └─ Renderiza: Componentes según rutas
```

---

## 💡 Patrones de Código Comunes

### Inyección de Dependencias

```typescript
// Nuevo (Angular 16+)
private miServicio = inject(MiServicio);

// Clásico
constructor(private miServicio: MiServicio) {}
```

### Obtener Parámetros de Ruta

```typescript
// En ngOnInit()
this.id = this.route.snapshot.paramMap.get('id');

// O de forma reactiva
this.route.params.subscribe(params => {
  this.id = params['id'];
});
```

### Navegación Programática

```typescript
// Navegar a ruta simple
this.router.navigate(['/']);

// Navegar con parámetros
this.router.navigate(['/detalle-proyecto', this.proyectoId]);

// Navegar con query params
this.router.navigate(['/'], { queryParams: { tab: 'home' } });
```

### Loops en Plantillas

```html
<!-- Iterar array -->
<div *ngFor="let item of items">
  {{ item.nombre }}
</div>

<!-- Iterar con índice -->
<div *ngFor="let item of items; let i = index">
  {{ i + 1 }}. {{ item.nombre }}
</div>
```

### Condicionales en Plantillas

```html
<!-- If -->
<div *ngIf="proyecto">
  {{ proyecto.titulo }}
</div>

<!-- If-else -->
<div *ngIf="detalleProyecto; else noEncontrado">
  {{ detalleProyecto.titulo }}
</div>
<ng-template #noEncontrado>
  <p>Proyecto no encontrado</p>
</ng-template>
```

---

## 🧪 Testing

### Estructura Básica

```typescript
describe('MiComponente', () => {
  let component: MiComponente;
  let fixture: ComponentFixture<MiComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponente],
      providers: [MiServicio]
    }).compileComponents();

    fixture = TestBed.createComponent(MiComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });
});
```

### Mock de Servicios

```typescript
let mockServicio: jasmine.SpyObj<MiServicio>;

beforeEach(() => {
  mockServicio = jasmine.createSpyObj('MiServicio', ['metodo1', 'metodo2']);
  
  TestBed.configureTestingModule({
    providers: [{ provide: MiServicio, useValue: mockServicio }]
  });
});
```

---

## 📦 Estructura de Carpetas

```
src/
├── app/
│   ├── models/                    # Interfaces
│   │   ├── proyecto.ts
│   │   └── detalleproyecto.ts
│   │
│   ├── services/                  # Servicios
│   │   ├── proyecto.ts
│   │   ├── proyecto.spec.ts
│   │   ├── detalleproyecto.ts
│   │   └── detalleproyecto.spec.ts
│   │
│   ├── home/                      # Componente Home
│   │   ├── home.ts
│   │   ├── home.html
│   │   ├── home.css
│   │   └── home.spec.ts
│   │
│   ├── detalle-proyecto/          # Componente DetalleProyecto
│   │   ├── detalle-proyecto.ts
│   │   ├── detalle-proyecto.html
│   │   ├── detalle-proyecto.css
│   │   └── detalle-proyecto.spec.ts
│   │
│   ├── app.ts                     # Componente raíz
│   ├── app.routes.ts              # Rutas
│   ├── app.config.ts              # Configuración
│   └── app.css                    # Estilos globales
│
├── main.ts                        # Punto de entrada
├── server.ts                      # Servidor SSR
├── styles.css                     # Estilos globales
└── index.html                     # HTML principal

public/
└── imagenes/
    ├── logos/
    └── powerbi/
        ├── inventario/
        └── ventas/
```

---

## 🎯 Checklist de Desarrollo

### Agregar Nuevo Proyecto

- [ ] Agregar objeto `Proyecto` en `ProyectoService.proyectos`
- [ ] Asegurar que `id` sea único
- [ ] Agregar imagen en `public/imagenes/`
- [ ] (Opcional) Agregar `DetalleProyecto` en `DetalleProyectoService.detallesProyecto`

### Agregar Nuevo Componente

- [ ] Crear carpeta en `src/app/`
- [ ] Crear `.ts` (componente)
- [ ] Crear `.html` (plantilla)
- [ ] Crear `.css` (estilos)
- [ ] Crear `.spec.ts` (tests)
- [ ] Agregar ruta en `app.routes.ts`

### Agregar Nuevo Servicio

- [ ] Crear archivo en `src/app/services/`
- [ ] Decorar con `@Injectable({ providedIn: 'root' })`
- [ ] Crear archivo `.spec.ts` con tests
- [ ] Inyectar en componentes que lo necesiten

---

## 🔐 Mejores Prácticas

### 1. Reutilización de Servicios
Siempre inyectar servicios en lugar de crear nuevas instancias.

### 2. Tipado Fuerte
Usar interfaces TypeScript para todas las estructuras de datos.

### 3. Compartimentalización
Mantener componentes, servicios y modelos en carpetas separadas.

### 4. Naming Conventions
- **Componentes**: PascalCase (Home, DetalleProyecto)
- **Servicios**: PascalCase con "Service" (ProyectoService)
- **Interfaces**: PascalCase (Proyecto, DetalleProyecto)
- **Archivos**: kebab-case (home.ts, detalle-proyecto.ts)

### 5. Documentación
Documentar métodos públicos con comentarios JSDoc.

---

## 🆘 Troubleshooting Común

### Error: "Cannot find module 'proyecto.service'"
- Verificar que el import tenga la ruta correcta
- Asegurar que el archivo existe

### Parámetro de ruta es `null`
- Verificar que el parámetro en la ruta es `:id`
- Usar `route.snapshot.paramMap.get('id')`

### Componente no renderiza datos
- Verificar que el servicio retorna datos
- Revisar que la plantilla tiene `*ngIf` o `*ngFor` correcto

### Servicio no está inyectado
- Agregar `@Injectable({ providedIn: 'root' })`
- O incluir en `providers` de TestBed

---

## 📚 Recursos Adicionales

- [Documentación Angular](https://angular.dev)
- [Angular CLI Commands](https://angular.dev/tools/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)
