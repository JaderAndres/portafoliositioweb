# Documentación - Componentes

## Descripción General

Los componentes son unidades reutilizables que encapsulan la lógica de presentación. Se encuentran en `src/app/`.

---

## Componente `App` (Raíz)

**Archivo**: `src/app/app.ts`

### Propósito
Componente raíz que envuelve toda la aplicación. Define el layout general y la navegación.

### Definición

```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portafolio de Power BI');
}
```

### Propiedades

| Propiedad | Tipo | Visibilidad | Descripción |
|-----------|------|------------|-------------|
| `title` | `Signal<string>` | protected readonly | Título de la aplicación |

#### `title: Signal<string>`

- **Tipo**: Angular Signal (reactividad)
- **Valor**: `'Portafolio de Power BI'`
- **Acceso**: Solo lectura (`readonly`)
- **Visibilidad**: `protected` (accesible desde la plantilla)
- **Uso**: Mostrar el título en la barra de navegación o encabezado

### Imports

| Import | Propósito |
|--------|----------|
| `RouterOutlet` | Renderiza el componente de la ruta activa |

### Plantilla (app.html)

```html
<header>
  <h1>{{ title }}</h1>
  <nav>
    <!-- Navegación -->
  </nav>
</header>

<main>
  <router-outlet></router-outlet>
</main>

<footer>
  <!-- Pie de página -->
</footer>
```

### Características

- **Standalone**: Componente standalone (Angular 14+)
- **RouterOutlet**: Permite el enrutamiento dinámico
- **Signal**: Usa reactivity signals de Angular 16+

---

## Componente `Home`

**Archivo**: `src/app/home/home.ts`

### Propósito
Mostrar el listado principal de proyectos. Es la página de inicio de la aplicación.

### Definición

```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  proyectos: Proyecto[] = [];
  private proyectoService = inject(ProyectoService);

  ngOnInit(): void {
    this.proyectos = this.proyectoService.obtenerListadoProyectos();
  }

  constructor(private router: Router) {}

  irDetalleProyecto(proyectoId: string): void {
    this.router.navigate(['/detalle-proyecto', proyectoId]);
  }
}
```

### Propiedades

| Propiedad | Tipo | Inicialización | Descripción |
|-----------|------|----------------|-------------|
| `proyectos` | `Proyecto[]` | `[]` | Array de proyectos a mostrar |
| `proyectoService` | `ProyectoService` | Injected | Servicio de proyectos |
| `router` | `Router` | Constructor | Servicio de enrutamiento |

#### `proyectos: Proyecto[]`
- **Tipo**: Array de Proyecto
- **Valor Inicial**: Array vacío `[]`
- **Poblado en**: `ngOnInit()`
- **Uso**: Iterar en la plantilla con `*ngFor`

### Ciclo de Vida

#### `ngOnInit(): void`

**Cuándo se ejecuta**: Después de que Angular inicializa las propiedades de entrada

**Acciones**:
1. Llama a `ProyectoService.obtenerListadoProyectos()`
2. Asigna el resultado a `this.proyectos`
3. Los datos se renderizan en la plantilla

**Código**:
```typescript
ngOnInit(): void {
  this.proyectos = this.proyectoService.obtenerListadoProyectos();
}
```

### Métodos

#### `irDetalleProyecto(proyectoId: string): void`

**Propósito**: Navegar al detalle de un proyecto específico

**Parámetro**: 
- `proyectoId: string` - ID del proyecto a ver

**Acción**: 
```typescript
this.router.navigate(['/detalle-proyecto', proyectoId]);
```

**Ruta generada**: `/detalle-proyecto/{proyectoId}`

**Ejemplo de uso en plantilla**:
```html
<button (click)="irDetalleProyecto(proyecto.id)">
  Ver Detalle
</button>
```

### Inyecciones

```typescript
// Inyección de ProyectoService
private proyectoService = inject(ProyectoService);

// Inyección de Router en constructor
constructor(private router: Router) {}
```

### Plantilla (home.html)

```html
<div class="proyecto-lista">
  <div *ngFor="let proyecto of proyectos" class="proyecto-card">
    <img [src]="proyecto.imagenPresentacion" [alt]="proyecto.tituloProyecto">
    <h3>{{ proyecto.tituloProyecto }}</h3>
    <p>{{ proyecto.presentacion }}</p>
    <span class="tipo">{{ proyecto.tipoProyecto }}</span>
    <button (click)="irDetalleProyecto(proyecto.id)">
      Ver Detalle
    </button>
  </div>
</div>
```

### Características

- **Standalone**: Componente autónomo
- **CommonModule**: Importado para `*ngFor` y `*ngIf`
- **OnInit**: Implementa la interfaz para inicialización

---

## Componente `DetalleProyecto`

**Archivo**: `src/app/detalle-proyecto/detalle-proyecto.ts`

### Propósito
Mostrar información detallada de un proyecto específico, obtenido por ID desde la URL.

### Definición

```typescript
@Component({
  selector: 'app-detalle-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-proyecto.html',
  styleUrl: './detalle-proyecto.css',
})
export class DetalleProyecto implements OnInit {
  proyectoId: string | null = null;
  detalleProyecto: DetalleProyectoModel | null = null;

  private detalleProyectoService = inject(DetalleProyectoService);

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.proyectoId = this.route.snapshot.paramMap.get('id');

    if (this.proyectoId) {
      const detalle = this.detalleProyectoService.obtenerDetalleProyecto(this.proyectoId);
      this.detalleProyecto = detalle || null;
    }
  }

  volver() {
    this.router.navigate(['/'])
  }
}
```

### Propiedades

| Propiedad | Tipo | Inicialización | Descripción |
|-----------|------|----------------|-------------|
| `proyectoId` | `string \| null` | `null` | ID del proyecto obtenido de la URL |
| `detalleProyecto` | `DetalleProyectoModel \| null` | `null` | Datos del proyecto |
| `detalleProyectoService` | `DetalleProyectoService` | Injected | Servicio de detalles |
| `route` | `ActivatedRoute` | Constructor | Ruta activa |
| `router` | `Router` | Constructor | Servicio de enrutamiento |

#### `proyectoId: string | null`
- **Tipo**: String o null
- **Valor Inicial**: `null`
- **Asignado en**: `ngOnInit()` desde parámetros de ruta
- **Uso**: Identificar qué proyecto mostrar

#### `detalleProyecto: DetalleProyectoModel | null`
- **Tipo**: DetalleProyecto o null
- **Valor Inicial**: `null`
- **Poblado en**: `ngOnInit()` desde el servicio
- **Uso**: Mostrar datos en la plantilla

### Ciclo de Vida

#### `ngOnInit(): void`

**Orden de ejecución**:

1. **Obtener ID de la URL**
   ```typescript
   this.proyectoId = this.route.snapshot.paramMap.get('id');
   ```
   - `route.snapshot`: Captura actual de la ruta
   - `paramMap`: Mapa de parámetros
   - `get('id')`: Obtiene el parámetro `:id`

2. **Validar que existe ID**
   ```typescript
   if (this.proyectoId) { ... }
   ```

3. **Obtener detalle del servicio**
   ```typescript
   const detalle = this.detalleProyectoService.obtenerDetalleProyecto(this.proyectoId);
   ```

4. **Asignar a propiedad**
   ```typescript
   this.detalleProyecto = detalle || null;
   ```
   - Si existe el detalle, se asigna
   - Si no existe, se asigna `null`

### Métodos

#### `volver(): void`

**Propósito**: Navegar de regreso a la página principal

**Acción**:
```typescript
this.router.navigate(['/'])
```

**Ruta**: `/` (página principal)

**Uso en plantilla**:
```html
<button (click)="volver()">← Volver</button>
```

### Inyecciones

```typescript
// Inyección de DetalleProyectoService
private detalleProyectoService = inject(DetalleProyectoService);

// Inyección en constructor
constructor(private route: ActivatedRoute,
            private router: Router) {}
```

- **ActivatedRoute**: Acceso a parámetros de ruta
- **Router**: Navegación programática

### Plantilla (detalle-proyecto.html)

```html
<div *ngIf="detalleProyecto" class="detalle-contenedor">
  <button (click)="volver()" class="btn-volver">← Volver</button>
  
  <h1>{{ detalleProyecto.tituloDetalle }}</h1>
  
  <section class="descripcion">
    <h2>Descripción</h2>
    <p>{{ detalleProyecto.descripcionCompleta }}</p>
  </section>

  <section class="objetivo">
    <h2>Objetivo</h2>
    <p>{{ detalleProyecto.objetivo }}</p>
  </section>

  <section class="imagenes">
    <img *ngFor="let img of detalleProyecto.imagenesDetalle"
         [src]="img"
         [alt]="detalleProyecto.tituloDetalle">
  </section>

  <section class="tecnologias" *ngIf="detalleProyecto.tecnologias">
    <h2>Tecnologías Utilizadas</h2>
    <div *ngFor="let tech of detalleProyecto.tecnologias" class="tech-item">
      <img *ngIf="tech.imagen" [src]="tech.imagen" [alt]="tech.nombre">
      <span>{{ tech.nombre }}</span>
    </div>
  </section>

  <section class="enlaces" *ngIf="detalleProyecto.enlaceExternoProyecto">
    <a [href]="detalleProyecto.enlaceExternoProyecto" target="_blank">
      Ver Proyecto en Vivo
    </a>
  </section>
</div>

<div *ngIf="!detalleProyecto" class="error">
  <p>Proyecto no encontrado</p>
  <button (click)="volver()">Volver al inicio</button>
</div>
```

### Características

- **Standalone**: Componente autónomo
- **CommonModule**: Para directivas `*ngIf`, `*ngFor`, `[src]`, etc.
- **OnInit**: Implementa inicialización
- **Manejo de rutas**: Acceso a parámetros de URL
- **Navegación programática**: Router para ir atrás

---

## Comunicación entre Componentes

### Flujo de Datos

```
Home (padres)
  ├─ Obtiene lista de ProyectoService
  ├─ Renderiza cada Proyecto
  └─ Navega a DetalleProyecto con ID

DetalleProyecto (hijo)
  ├─ Lee ID de URL
  ├─ Obtiene detalle de DetalleProyectoService
  ├─ Renderiza información
  └─ Navega de regreso a Home
```

### Métodos de Comunicación

1. **Servicios**: Compartir datos entre componentes
2. **Enrutamiento**: Pasar parámetros en la URL
3. **Input/Output**: (No se usa en esta app, pero es posible)

---

## Testing de Componentes

### Ejemplo: Test de Home

```typescript
describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let mockProyectoService: jasmine.SpyObj<ProyectoService>;

  beforeEach(async () => {
    mockProyectoService = jasmine.createSpyObj('ProyectoService', ['obtenerListadoProyectos']);
    
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [{ provide: ProyectoService, useValue: mockProyectoService }]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
  });

  it('debe cargar proyectos en ngOnInit', () => {
    const mockProyectos: Proyecto[] = [
      { id: '1', tituloProyecto: 'Test', presentacion: 'Test', imagenPresentacion: '', tipoProyecto: 'Web', fechaCreacion: new Date() }
    ];
    mockProyectoService.obtenerListadoProyectos.and.returnValue(mockProyectos);

    component.ngOnInit();

    expect(component.proyectos).toEqual(mockProyectos);
  });

  it('debe navegar al hacer click en proyecto', () => {
    spyOn(component['router'], 'navigate');
    
    component.irDetalleProyecto('1');
    
    expect(component['router'].navigate).toHaveBeenCalledWith(['/detalle-proyecto', '1']);
  });
});
```

### Ejemplo: Test de DetalleProyecto

```typescript
describe('DetalleProyecto', () => {
  let component: DetalleProyecto;
  let fixture: ComponentFixture<DetalleProyecto>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [DetalleProyecto],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProyecto);
    component = fixture.componentInstance;
  });

  it('debe obtener ID de URL', () => {
    component.ngOnInit();
    
    expect(component.proyectoId).toBe('1');
  });
});
```
