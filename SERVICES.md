# Documentación - Servicios

## Descripción General

Los servicios encapsulan la lógica de negocio y el acceso a datos. Se encuentran en `src/app/services/`.

---

## `ProyectoService`

**Archivo**: `src/app/services/proyecto.ts`

### Propósito
Gestionar y proporcionar la lista de proyectos disponibles en la aplicación.

### Decorador e Inyección

```typescript
@Injectable({
  providedIn: 'root',
})
export class ProyectoService { ... }
```

- **`@Injectable`**: Marca la clase como inyectable
- **`providedIn: 'root'`**: El servicio se proporciona a nivel raíz, creando una instancia única (singleton) para toda la aplicación

### Métodos

#### `obtenerListadoProyectos(): Proyecto[]`

**Propósito**: Retornar el array completo de proyectos.

**Parámetros**: Ninguno

**Retorno**: `Proyecto[]` - Array de objetos Proyecto

**Descripción**: 
- Retorna el array privado `proyectos` que contiene todos los proyectos disponibles
- Actualmente contiene dos proyectos hardcodeados: "Reporte de Inventario" y "Reporte de Ventas"
- En una aplicación real, este método haría una llamada a una API REST

**Ejemplo de Uso**:
```typescript
// En el componente Home
ngOnInit(): void {
  this.proyectos = this.proyectoService.obtenerListadoProyectos();
}
```

### Datos Almacenados

```typescript
private proyectos: Proyecto[] = [
  {
    id: '1',
    tituloProyecto: 'Reporte de Inventario',
    presentacion: 'Este es un reporte de inventario desarrollado en PowerBI...',
    imagenPresentacion: '/imagenes/powerbi/inventario/pres_inventario.jpeg',
    enlaceDetalle: '',
    tipoProyecto: 'PowerBI',
    fechaCreacion: new Date(),
  },
  {
    id: '2',
    tituloProyecto: 'Reporte de Ventas',
    presentacion: 'En este diseño de reporte de ventas en PowerBI...',
    imagenPresentacion: '/imagenes/powerbi/ventas/pres_ventas.jpeg',
    enlaceDetalle: '',
    tipoProyecto: 'PowerBI',
    fechaCreacion: new Date(),
  },
];
```

### Inyección en Componentes

```typescript
// Usando método inject (Angular 17+)
private proyectoService = inject(ProyectoService);

// Usando constructor (Angular clásico)
constructor(private proyectoService: ProyectoService) {}
```

---

## `DetalleProyectoService`

**Archivo**: `src/app/services/detalleproyecto.ts`

### Propósito
Proporcionar información detallada de proyectos específicos basados en su ID.

### Decorador e Inyección

```typescript
@Injectable({
  providedIn: 'root',
})
export class DetalleProyectoService { ... }
```

Mismo patrón de inyección que `ProyectoService`.

### Métodos

#### `obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined`

**Propósito**: Recuperar los detalles de un proyecto específico.

**Parámetros**: 
- `proyectoId: string` - Identificador único del proyecto

**Retorno**: `DetalleProyecto | undefined`
- Retorna el objeto `DetalleProyecto` si existe
- Retorna `undefined` si no se encuentra el proyecto

**Descripción**: 
- Busca en el array `detallesProyecto` un elemento cuyo `proyectoId` coincida
- Usa el método `find()` de arrays
- Actualmente solo contiene un detalle (proyectoId: '1')

**Ejemplo de Uso**:
```typescript
// En el componente DetalleProyecto (ngOnInit)
this.proyectoId = this.route.snapshot.paramMap.get('id');

if (this.proyectoId) {
  const detalle = this.detalleProyectoService.obtenerDetalleProyecto(this.proyectoId);
  this.detalleProyecto = detalle || null;
}
```

### Implementación Interna

```typescript
obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined {
  return this.detallesProyecto.find(detalle => detalle.proyectoId === proyectoId);
}
```

- **`find()`**: Devuelve el primer elemento que cumple la condición
- **Comparación**: `detalle.proyectoId === proyectoId`

### Datos Almacenados

```typescript
private detallesProyecto: DetalleProyecto[] = [
  {
    proyectoId: '1',
    tituloDetalle: 'Seguimiento de inventario en tienda de papelería OfficeStore',
    descripcionCompleta: 'Este reporte de inventario en PowerBI proporciona...',
    objetivo: 'El objetivo principal de este proyecto es ofrecer...',
    metodologia: 'Se utilizó PowerBI para diseñar y desarrollar...',
    imagenesDetalle: ['/imagenes/powerbi/inventario/p1.svg','/imagenes/powerbi/inventario/p2.svg'],
    interpretacionResultados: ['El análisis muestra que...', 'Se identificaron períodos...'],
    enlaceExternoProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiMGY0NGI2YmUtZGJiNS00NjUxLThlMzEtNjY1YzM4NjIxZDNhIiwidCI6IjM4NTVmZDBlLTJlOWEtNGZjYy05NTUyLTg3OGEwZmU0YTA1ZCIsImMiOjR9',
    tecnologias: [{ nombre: 'PowerBI', imagen:'/imagenes/logos/powerbilogo.png' }, {nombre: 'excel', imagen:'/imagenes/logos/excellogo.png'}],
    repositorio: '',
    observacionesAdicionales: 'Este proyecto fue desarrollado en colaboración...'
  }
];
```

### Inyección en Componentes

```typescript
// Método inject
private detalleProyectoService = inject(DetalleProyectoService);

// Constructor
constructor(private detalleProyectoService: DetalleProyectoService) {}
```

---

## Patrones de Diseño Utilizados

### Patrón Singleton
Ambos servicios utilizan `providedIn: 'root'` para crear una única instancia compartida en toda la aplicación.

### Encapsulación de Datos
Los arrays `proyectos` y `detallesProyecto` son `private`, obligando a acceder mediante métodos públicos.

---

## Mejoras Futuras

### 1. Integración con API HTTP
```typescript
obtenerListadoProyectos(): Observable<Proyecto[]> {
  return this.http.get<Proyecto[]>('/api/proyectos');
}
```

### 2. Caché de Datos
```typescript
private cache: Map<string, DetalleProyecto> = new Map();

obtenerDetalleProyecto(proyectoId: string): DetalleProyecto | undefined {
  if (this.cache.has(proyectoId)) {
    return this.cache.get(proyectoId);
  }
  // Fetch from API...
}
```

### 3. Manejo de Errores
```typescript
obtenerDetalleProyecto(proyectoId: string): Observable<DetalleProyecto> {
  return this.http.get<DetalleProyecto>(`/api/proyectos/${proyectoId}`)
    .pipe(
      catchError(error => {
        console.error('Error al obtener detalle:', error);
        return throwError(() => new Error('No se encontró el proyecto'));
      })
    );
}
```

### 4. RxJS Observables
```typescript
proyectos$ = signal(this.obtenerListadoProyectos());

obtenerDetalleProyecto$(proyectoId: string): Observable<DetalleProyecto> {
  return new Observable(observer => {
    const detalle = this.obtenerDetalleProyecto(proyectoId);
    if (detalle) {
      observer.next(detalle);
      observer.complete();
    } else {
      observer.error('Proyecto no encontrado');
    }
  });
}
```

---

## Testing

### Ejemplo de Test para ProyectoService

```typescript
describe('ProyectoService', () => {
  let service: ProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar lista de proyectos', () => {
    const proyectos = service.obtenerListadoProyectos();
    expect(proyectos.length).toBe(2);
    expect(proyectos[0].id).toBe('1');
  });
});
```

### Ejemplo de Test para DetalleProyectoService

```typescript
describe('DetalleProyectoService', () => {
  let service: DetalleProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleProyectoService);
  });

  it('debe retornar detalle cuando existe el ID', () => {
    const detalle = service.obtenerDetalleProyecto('1');
    expect(detalle).toBeTruthy();
    expect(detalle?.tituloDetalle).toContain('OfficeStore');
  });

  it('debe retornar undefined cuando no existe el ID', () => {
    const detalle = service.obtenerDetalleProyecto('999');
    expect(detalle).toBeUndefined();
  });
});
```
