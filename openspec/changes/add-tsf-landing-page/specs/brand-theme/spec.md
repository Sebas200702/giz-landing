# Spec: brand-theme

## ADDED Requirements

### Requirement: Tokens de color de marca

El sistema SHALL definir la paleta de marca como tokens de Tailwind 4 (`@theme` en `src/styles/global.css`) con exactamente estos valores: teal `#0B7285`, azul `#003399`, amarillo `#F8CA2E`, coral `#FF6A4A`, tinta `#3C3C3B` y blanco `#FFFFFF`. Ningún componente SHALL usar colores de marca hardcodeados fuera de estos tokens.

#### Scenario: Utilidades generadas desde tokens

- **WHEN** un componente necesita un color de marca (fondo, texto o borde)
- **THEN** usa la utilidad generada por el token (p. ej. `bg-teal`, `text-coral`) y el valor hex aparece una única vez en el codebase (en `@theme`)

### Requirement: Tipografía de marca self-hosted

El sistema SHALL servir las tipografías desde el propio dominio (sin peticiones a Google Fonts en runtime): Montserrat (pesos 400–900) como fuente de texto, y Lemon Milk Bold como fuente display para títulos **solo si** sus archivos licenciados están presentes; en su ausencia, el token de fuente display SHALL resolver a Montserrat 900. Todas las fuentes SHALL declararse con `font-display: swap`.

#### Scenario: Lemon Milk no disponible

- **WHEN** el proyecto se construye sin los archivos de Lemon Milk Bold
- **THEN** los títulos se renderizan en Montserrat 900 uppercase sin cambios en el markup ni en las clases de los componentes

#### Scenario: Sin dependencias de fuentes externas

- **WHEN** se carga la página en producción
- **THEN** no se realiza ninguna petición a `fonts.googleapis.com` ni `fonts.gstatic.com`

### Requirement: Estilo de títulos display

Los títulos de sección (h1–h2) SHALL usar la fuente display en mayúsculas (`uppercase`), con peso máximo e interlineado compacto (line-height ≤ 1.1), replicando la jerarquía visual del manual de marca.

#### Scenario: Título de sección

- **WHEN** se renderiza un encabezado de sección
- **THEN** aparece en mayúsculas, fuente display, y mantiene contraste AA sobre su fondo

### Requirement: Componente de botón pill

El sistema SHALL proveer un componente de botón reutilizable con forma pill (radio completo), texto en mayúsculas y tres variantes: coral (primaria, fondo `#FF6A4A`), teal (secundaria, fondo `#0B7285`) y outline (borde blanco sobre fondos oscuros). Los botones SHALL renderizarse como `<a>` con `href` real y tener área táctil mínima de 44×44 px.

#### Scenario: Variantes disponibles

- **WHEN** una sección requiere un CTA primario, secundario u outline
- **THEN** usa el mismo componente con la variante correspondiente, sin duplicar clases de estilo

#### Scenario: Foco visible

- **WHEN** el botón recibe foco por teclado
- **THEN** muestra un indicador de foco visible con contraste suficiente sobre cualquiera de sus fondos

### Requirement: Kicker de sección

El sistema SHALL proveer un estilo "kicker" (etiqueta corta sobre el título: mayúsculas, letter-spacing amplio, peso 800, color de acento por sección) reutilizable en todas las secciones que lo usan en el diseño de referencia.

#### Scenario: Kicker en una sección

- **WHEN** una sección declara su kicker (p. ej. "Convocatoria abierta", "Para quién es")
- **THEN** se renderiza con el estilo compartido y el color de acento configurado para esa sección
