# 🚀 INICIO RÁPIDO - DOCUMENTACIÓN

Bienvenido al Proyecto Portafolio. Esta guía te ayudará a navegar la documentación en 5 minutos.

---

## ⚡ 5 Pasos para Empezar

### 1️⃣ **¿Dónde Empiezo?**
→ Leer **DOCUMENTATION.md** (5 min)
- Es la tabla de contenidos central
- Te dirá qué leer según tu perfil

### 2️⃣ **¿Qué es el Proyecto?**
→ Leer **README.md** (10 min)
- Descripción general
- Cómo instalarlo
- Qué hace

### 3️⃣ **¿Cómo Funciona?**
→ Leer **ARCHITECTURE.md** (20 min)
- Diagrama general
- Flujos de usuarios
- Cómo se conectan las piezas

### 4️⃣ **Entiendo, ¿Dónde está el Código?**
→ Usar **REFERENCE.md** (5 min)
- Búsqueda rápida de clases
- Ubicación de archivos
- Métodos disponibles

### 5️⃣ **¿Cómo Exploro el Código?**
→ Leer documentación específica:
- **MODELS.md** - Estructuras de datos
- **SERVICES.md** - Lógica de negocio
- **COMPONENTS.md** - Interfaz de usuario

---

## 🎯 Por Tipo de Usuario

### 👨‍💼 Manager / Product Owner
```
Tiempo: 15 minutos

1. README.md (características)
2. ARCHITECTURE.md (diagrama general)

Resultado: Entender qué hace la app y cómo funciona
```

### 👨‍💻 Desarrollador
```
Tiempo: 2-3 horas

1. README.md
2. ARCHITECTURE.md
3. MODELS.md
4. SERVICES.md
5. COMPONENTS.md
6. REFERENCE.md

Resultado: Poder codificar y mantener la aplicación
```

### 🔍 Code Reviewer
```
Tiempo: 1 hora

1. ARCHITECTURE.md
2. COMPONENTS.md
3. REFERENCE.md

Resultado: Revisar código con contexto arquitectónico
```

### 🧪 QA / Tester
```
Tiempo: 1 hora

1. README.md (características)
2. ARCHITECTURE.md (flujos)
3. REFERENCE.md (rutas)

Resultado: Entender cómo probar la aplicación
```

---

## 📖 Los 9 Documentos Explicados

```
INDEX.md ← TÚ ESTÁS AQUÍ
│
├─ DOCUMENTATION.md (⭐ Empieza aquí)
│  └─ Tabla de contenidos central
│
├─ README.md 
│  └─ Qué es el proyecto, cómo instalarlo
│
├─ ARCHITECTURE.md
│  └─ Cómo funciona todo, diagramas, flujos
│
├─ MODELS.md
│  └─ Proyecto e interfaces
│
├─ SERVICES.md
│  └─ ProyectoService y DetalleProyectoService
│
├─ COMPONENTS.md
│  └─ App, Home y DetalleProyecto
│
├─ REFERENCE.md
│  └─ Búsqueda rápida de métodos y rutas
│
└─ VISUAL_MAP.md
   └─ Mapas de navegación visual
```

---

## 🔎 Búsqueda Rápida

### Busco una clase...
→ Abre **REFERENCE.md** → Sección "Índice de Archivos"

### Busco un método...
→ Abre **REFERENCE.md** → Sección "Búsqueda Rápida de Métodos"

### Busco una ruta...
→ Abre **REFERENCE.md** → Sección "Rutas de la Aplicación"

### Tengo un error...
→ Abre **REFERENCE.md** → Sección "Troubleshooting"

### Necesito ejemplos...
→ Abre el documento específico:
- Ejemplos en **MODELS.md**
- Ejemplos en **SERVICES.md**
- Ejemplos en **COMPONENTS.md**

---

## 🗺️ Mapa de Navegación

```
QUIERO APRENDER SOBRE...

┌─ Proyecto General
│  ├─ DOCUMENTATION.md
│  └─ README.md

├─ Arquitectura
│  └─ ARCHITECTURE.md

├─ Modelos
│  └─ MODELS.md

├─ Servicios
│  └─ SERVICES.md

├─ Componentes
│  └─ COMPONENTS.md

├─ Métodos específicos
│  └─ REFERENCE.md

├─ Cómo navegar documentación
│  ├─ DOCUMENTATION.md
│  └─ VISUAL_MAP.md

└─ Esto (inicio rápido)
   └─ INDEX.md
```

---

## 💻 El Proyecto en 30 Segundos

**Portafolio** es una aplicación Angular que muestra:
1. Listado de proyectos Power BI en la página principal
2. Detalles completos de cada proyecto en una página separada

**Tecnologías**:
- Angular 20.3
- TypeScript 5.9
- Componentes standalone
- Routing
- Servicios inyectables

**Estructura**:
```
Componentes:          Home, DetalleProyecto, App
Servicios:            ProyectoService, DetalleProyectoService
Modelos:              Proyecto, DetalleProyecto
Rutas:                / (Home), /detalle-proyecto/:id (Detalle)
```

---

## 🎓 Ruta de Aprendizaje Recomendada

### Semana 1: Conceptos
```
Día 1: Leer README.md + ARCHITECTURE.md (1 hora)
Día 2: Leer MODELS.md + SERVICES.md (1 hora)
Día 3: Leer COMPONENTS.md (1.5 horas)
Día 4: Revisar REFERENCE.md (30 min)
Día 5: Explorar código + preguntas (1 hora)
```

### Semana 2: Práctica
```
Día 1: Instalar y ejecutar la aplicación
Día 2: Modificar datos en servicios
Día 3: Agregar nuevo componente
Día 4: Escribir tests
Día 5: Revisar todo el código
```

---

## 📊 Guía Visual Rápida

### Estructura General
```
┌─────────────────────────────────┐
│    Aplicación Angular           │
│    (App.ts)                     │
└────────────┬────────────────────┘
             │
     ┌───────┴──────────┐
     ↓                  ↓
┌─────────┐      ┌──────────────────┐
│  Home   │      │ DetalleProyecto  │
│(Listado)│      │   (Detalle)      │
└────┬────┘      └────────┬─────────┘
     │                    │
     └────────┬───────────┘
              ↓
        ┌──────────────┐
        │   SERVICIOS  │
        ├──────────────┤
        │ Proyecto svc │ → Array de Proyectos
        │ Detalle svc  │ → Proyecto específico
        └──────────────┘
```

### Flujo de Datos
```
Usuario accede a /
  ↓
Home se carga
  ↓
Obtiene lista de ProyectoService
  ↓
Renderiza proyectos
  ↓
Usuario clickea "Ver Detalle"
  ↓
Navega a /detalle-proyecto/1
  ↓
DetalleProyecto obtiene detalle del servicio
  ↓
Renderiza información completa
```

---

## ✅ Checklist de Lectura

### Primero (30 min)
- [ ] Este archivo (INDEX.md)
- [ ] DOCUMENTATION.md
- [ ] README.md

### Después (1.5 horas)
- [ ] ARCHITECTURE.md
- [ ] MODELS.md
- [ ] SERVICES.md

### Luego (1 hora)
- [ ] COMPONENTS.md
- [ ] REFERENCE.md

### Finalmente (30 min)
- [ ] VISUAL_MAP.md
- [ ] Explorar código en src/app/

---

## 🔗 Links Directos

| Quiero | Link |
|--------|------|
| Empezar desde cero | [DOCUMENTATION.md](./DOCUMENTATION.md) |
| Instalar la app | [README.md](./README.md#-instalación-y-configuración) |
| Entender arquitectura | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Ver modelos | [MODELS.md](./MODELS.md) |
| Ver servicios | [SERVICES.md](./SERVICES.md) |
| Ver componentes | [COMPONENTS.md](./COMPONENTS.md) |
| Referencia rápida | [REFERENCE.md](./REFERENCE.md) |
| Navegar documentación | [VISUAL_MAP.md](./VISUAL_MAP.md) |

---

## 💡 Tips Prácticos

### Para instalar y ejecutar:
```bash
cd c:\PortafolioSitioWeb\portafolio
npm install
npm start
```
→ Abre http://localhost:4200

### Para entender un método:
1. Abre REFERENCE.md
2. Busca el método en "Búsqueda Rápida"
3. Abre el archivo indicado
4. Lee la documentación del método

### Para entender un componente:
1. Abre COMPONENTS.md
2. Busca el componente
3. Lee propiedades y métodos
4. Mira ejemplos

### Para encontrar un archivo:
1. Abre REFERENCE.md
2. Ve a "Índice de Archivos Principales"
3. Busca el archivo

---

## 🎯 Objetivos por Documento

| Doc | Objetivo |
|-----|----------|
| DOCUMENTATION.md | Saber qué leer |
| README.md | Entender qué hace |
| ARCHITECTURE.md | Entender cómo funciona |
| MODELS.md | Conocer estructuras de datos |
| SERVICES.md | Entender lógica de negocio |
| COMPONENTS.md | Entender interfaz |
| REFERENCE.md | Buscar rápidamente |
| VISUAL_MAP.md | Navegar documentación |
| INDEX.md | Este archivo (inicio) |

---

## ⏱️ Tiempos Estimados

| Actividad | Tiempo |
|-----------|--------|
| Leer documentación completa | 3-4 horas |
| Instalar y ejecutar app | 10 minutos |
| Entender arquitectura | 1 hora |
| Entender un componente | 15 minutos |
| Entender un servicio | 10 minutos |
| Buscar método rápidamente | 1 minuto |
| Hacer cambio pequeño | 10 minutos |
| Escribir test | 20 minutos |

---

## 📞 Ayuda Rápida

**P: ¿Por dónde empiezo?**
R: Abre [DOCUMENTATION.md](./DOCUMENTATION.md)

**P: ¿Cómo instalo la app?**
R: Lee [README.md](./README.md#-instalación-y-configuración)

**P: ¿Dónde está la clase X?**
R: Busca en [REFERENCE.md](./REFERENCE.md#-índice-de-archivos-principales)

**P: ¿Cómo funciona el enrutamiento?**
R: Lee [ARCHITECTURE.md](./ARCHITECTURE.md#-capa-de-enrutamiento)

**P: ¿Qué parámetros tiene el método X?**
R: Busca en [REFERENCE.md](./REFERENCE.md#-búsqueda-rápida-de-métodos)

**P: Tengo error X**
R: Consulta [REFERENCE.md](./REFERENCE.md#-troubleshooting-común)

---

## 🎓 Niveles de Lectura

### 🟢 Básico (1 hora)
- README.md
- ARCHITECTURE.md (solo diagrama)

### 🟡 Intermedio (2-3 horas)
- Todo lo anterior +
- MODELS.md
- SERVICES.md
- COMPONENTS.md

### 🔴 Avanzado (3-4 horas)
- Todo lo anterior +
- REFERENCE.md
- VISUAL_MAP.md
- Explorar código

---

## ✨ Resumen

**Tienes acceso a documentación profesional y completa:**

✅ 9 documentos Markdown
✅ 84+ KB de contenido
✅ 50+ ejemplos de código
✅ 15+ diagramas y flujos
✅ 100% del código documentado
✅ Referencias cruzadas
✅ Índices completos
✅ Troubleshooting incluido

**Siguiente paso:**
👉 Abre [DOCUMENTATION.md](./DOCUMENTATION.md)

---

**Última actualización**: Noviembre 2025
**Documentación**: Completa
**Estado**: ✅ Lista para usar
