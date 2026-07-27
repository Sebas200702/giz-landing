# Spec: seo-accessibility

## Purpose

Establish search engine optimization (SEO) standards, accessibility (WCAG 2.1 AA) specifications, performance budgets, and social sharing metadata config.

## Requirements

### Requirement: Metadatos SEO y sociales

`Layout.astro` SHALL emitir para la página: `<html lang="es">`, `<title>` y meta description propios del proyecto, URL canonical, metadatos Open Graph y Twitter Card con imagen social de marca (1200×630), y favicon derivado del logo. Los valores por página SHALL pasarse como props del Layout.

#### Scenario: Vista previa social

- **THEN** la tarjeta muestra el título del proyecto, la descripción y la imagen social de marca

### Requirement: Datos estructurados de FAQ

La página SHALL incluir JSON-LD de tipo `FAQPage` generado desde el mismo array de datos que renderiza la sección de preguntas frecuentes (una sola fuente de verdad).

#### Scenario: FAQ sincronizada

- **WHEN** se agrega o edita una pregunta en el módulo de datos
- **THEN** el acordeón visible y el JSON-LD reflejan el mismo contenido sin edición doble

### Requirement: Sitemap y robots

El proyecto SHALL generar `sitemap` con `@astrojs/sitemap` y servir un `robots.txt` que lo referencie, usando el valor `site` configurado en `astro.config.mjs` cuando el dominio esté definido.

#### Scenario: Build con dominio configurado

- **WHEN** se ejecuta `astro build` con `site` configurado
- **THEN** el output incluye el sitemap y `robots.txt` apunta a él

### Requirement: Accesibilidad WCAG 2.1 AA

La página SHALL cumplir WCAG 2.1 AA: jerarquía de encabezados correcta (un solo `h1`, `h2` por sección), landmarks semánticos (`header`, `nav`, `main`, `footer`), contraste de texto ≥ 4.5:1 (≥ 3:1 para texto grande), alt text en todas las imágenes informativas, foco visible en todos los interactivos y operabilidad completa por teclado (menú móvil y acordeón incluidos). El texto sobre el fondo amarillo `#F8CA2E` SHALL usar la tinta `#3C3C3B` (no blanco) para mantener contraste.

#### Scenario: Navegación por teclado

- **WHEN** un usuario recorre la página solo con Tab/Enter/Escape
- **THEN** puede abrir y cerrar el menú móvil, activar cada CTA y expandir cada pregunta del FAQ, siempre con foco visible

#### Scenario: Auditoría automática

- **WHEN** se ejecuta una auditoría de accesibilidad (Lighthouse/axe) sobre la página construida
- **THEN** no reporta violaciones de contraste, alt text, nombres accesibles ni jerarquía de encabezados

### Requirement: Presupuesto de rendimiento

La página construida SHALL alcanzar en Lighthouse móvil ≥ 90 en Performance, Accessibility, Best Practices y SEO. Para ello: imágenes servidas vía `astro:assets` en formatos modernos con `loading="lazy"` (excepto el hero, que es el LCP y se carga eager con `fetchpriority="high"`), fuentes self-hosted con `font-display: swap`, y sin JavaScript de framework (solo el script mínimo del menú móvil).

#### Scenario: Auditoría Lighthouse

- **WHEN** se audita el build de producción en modo móvil
- **THEN** las cuatro categorías puntúan ≥ 90

#### Scenario: Imágenes optimizadas

- **WHEN** se inspecciona el HTML generado
- **THEN** las fotos usan formatos modernos (AVIF/WebP) con `srcset` responsive, y solo la imagen del hero se carga eager
