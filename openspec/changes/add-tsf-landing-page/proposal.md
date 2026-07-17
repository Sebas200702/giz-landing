# Proposal: Landing "Talento Sin Fronteras" (proyecto giz)

## Why

El proyecto **Talento Sin Fronteras** (GIZ / Unión Europea / Cooperación Alemana / Fundación Colombia Incluyente) necesita una landing pública para su convocatoria de empleabilidad dirigida a personas migrantes y colombianas (+18, sin empleo) en Cúcuta, Bucaramanga y Bogotá D.C. Hoy solo existe un mockup estático (HTML/PDF de diseño) que no es responsive, no tiene navegación funcional, ni SEO, ni formulario real. El repositorio `giz-landing` (Astro 7 + Tailwind 4) está recién inicializado y vacío.

La landing debe **adaptar y mejorar** el diseño de referencia — no copiarlo pixel-perfect — priorizando el uso real: la audiencia principal accede desde celulares de gama media/baja, muchas veces con datos limitados.

## What Changes

- Se construye la landing completa en `src/pages/index.astro`, descompuesta en componentes Astro por sección, siguiendo la estructura del diseño de referencia:
  1. Header/nav con anclas y CTA "Regístrate" (menú móvil incluido)
  2. Hero con foto, titular "Cada trayecto merece una oportunidad" y CTAs (registro + WhatsApp)
  3. Franja de convocatoria (elegibilidad resumida)
  4. "¿Es para ti?" — 3 tarjetas de audiencia + listado de municipios
  5. "Un camino completo hacia el empleo" — ruta de 4 pasos (timeline)
  6. "Estudia 100% virtual, a tu ritmo" — bloque de formación (20h + 40h = 60h)
  7. "Qué vas a aprender" — temario: habilidades para el empleo + 3 módulos técnicos (Servicio al cliente, Ventas, Logística)
  8. "¿Buscas talento comprometido?" — sección para empresas aliadas
  9. Inscripción — formulario embebido de Zoho (placeholder configurable hasta tener la URL real)
  10. FAQ — acordeón accesible con las 4 preguntas del diseño
  11. Banda de contacto por WhatsApp + footer con logos de aliados
- Se implementa el sistema de diseño de marca como tokens de Tailwind 4 (`@theme` en `global.css`): paleta (#0B7285, #003399, #F8CA2E, #FF6A4A, #3C3C3B), tipografías (Lemon Milk Bold para títulos con fallback, Montserrat para textos, self-hosted) y componentes base (botones pill, kickers, tarjetas).
- **Mejoras sobre el diseño de referencia** (el mockup es desktop-only y estático):
  - Diseño responsive mobile-first (el timeline zigzag colapsa a columna, grillas colapsan, menú hamburguesa)
  - HTML semántico y accesible (WCAG 2.1 AA: contraste, foco visible, `details/summary`, alt text, jerarquía de encabezados)
  - CTAs de WhatsApp funcionales vía deep link `wa.me` (número configurable) y CTA pegajoso en móvil
  - SEO completo: metadatos, Open Graph/Twitter, JSON-LD (`FAQPage`), sitemap, favicon
  - Rendimiento: imágenes optimizadas con `astro:assets`, fuentes con `font-display: swap`, cero JS innecesario (estático puro salvo el menú móvil)
- Se limpia el scaffold por defecto de Astro (`Welcome.astro`, assets de ejemplo).

## Capabilities

### New Capabilities

- `brand-theme`: sistema de diseño de marca — tokens de color y tipografía en Tailwind 4, fuentes self-hosted, estilos base de botones/kickers/títulos reutilizables.
- `landing-page`: estructura, contenido y comportamiento de las secciones de la landing (hero, elegibilidad, audiencia, ruta de 4 pasos, formación, temario, empresas, FAQ, footer) y su navegación por anclas, responsive en todos los breakpoints.
- `lead-capture`: puntos de conversión — formulario de inscripción Zoho embebido (con placeholder configurable) y CTAs de WhatsApp (deep links configurables, CTA sticky en móvil).
- `seo-accessibility`: metadatos SEO/social, datos estructurados, accesibilidad WCAG 2.1 AA y presupuesto de rendimiento (Lighthouse ≥ 90 en móvil).

### Modified Capabilities

_(ninguna — no existen specs previas en `openspec/specs/`)_

## Impact

- **Código**: `src/pages/index.astro`, `src/layouts/Layout.astro`, nuevos `src/components/*.astro`, `src/styles/global.css`, `src/assets/` (logos, fotos, fuentes), `public/` (favicon, og-image). Se elimina `src/components/Welcome.astro` y assets de ejemplo.
- **Dependencias**: posibles adiciones menores — `@fontsource` para Montserrat y/o archivos de fuente locales; `@astrojs/sitemap`. Sin backend: el sitio sigue siendo 100% estático.
- **Insumos pendientes del cliente** (no bloquean la implementación, se configuran como constantes):
  - Número de WhatsApp oficial del proyecto
  - URL/código de embed del formulario Zoho
  - ~~Archivos de la fuente Lemon Milk Bold~~ — resuelto: ya está en `src/assets/fonts/` (donationware, ver licencia junto a la fuente)
  - Fotos finales y logos en alta resolución (se extraen provisionales de los assets de referencia)
- **Sistemas**: ninguno externo salvo el embed de Zoho (iframe/script de terceros, carga diferida).
