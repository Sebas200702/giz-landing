# Tasks: Landing "Talento Sin Fronteras"

## 1. Fundaciones (brand-theme)

- [ ] 1.1 Definir tokens `@theme` en `src/styles/global.css`: colores de marca (teal, blue, yellow, coral, ink) y familias tipográficas (`--font-display`, `--font-sans`)
- [ ] 1.2 Instalar y registrar Montserrat self-hosted (pesos 400–900, woff2, `font-display: swap`); registrar `@font-face` de Lemon Milk Bold desde `src/assets/fonts/LEMONMILK-Bold.woff2` (ya en el repo) con fallback Montserrat 900
- [ ] 1.3 Crear componentes base: `Button.astro` (variantes coral/teal/outline, pill, foco visible), estilo `kicker` y estilo de título display (uppercase, line-height compacto)
- [ ] 1.4 Crear `src/data/site.ts` con todo el copy (secciones, municipios, pasos, temarios, FAQs) y constantes de conversión (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `ZOHO_FORM_URL`, contacto empresas) tipadas
- [ ] 1.5 Extraer assets de los PDFs de referencia a `src/assets/`: logo TSF (variantes), logos de aliados, foto de hero provisional, iconos; marcar provisionales con TODO

## 2. Layout y esqueleto de página

- [ ] 2.1 Reescribir `src/layouts/Layout.astro`: `lang="es"`, props de título/descripción, metadatos base, canonical, Open Graph/Twitter, favicon, slot para JSON-LD
- [ ] 2.2 Limpiar el scaffold de Astro: eliminar `src/components/Welcome.astro`, `src/assets/astro.svg`, `src/assets/background.svg` y el favicon por defecto de `public/` (lo reemplaza el de marca en 2.1); verificar con grep que no queden referencias y que `astro build` pase limpio; reescribir `src/pages/index.astro` como composición de secciones con `<main>`
- [ ] 2.3 Crear `Header.astro`: logo, anclas (El proyecto, Beneficios, Preguntas, Empresas), CTA "Regístrate", menú hamburguesa accesible (< 768 px) con script vanilla mínimo

## 3. Secciones de contenido (landing-page)

- [ ] 3.1 `Hero.astro`: fondo teal, kicker "Convocatoria abierta", `<h1>` "Cada trayecto merece una oportunidad", párrafo, CTAs (Quiero participar + WhatsApp outline), foto LCP eager con `fetchpriority="high"`, layout responsive
- [ ] 3.2 `EligibilityBar.astro`: franja amarilla con el resumen de elegibilidad (texto ink sobre amarillo)
- [ ] 3.3 `Audience.astro` ("¿Es para ti?"): 3 tarjetas + listado de municipios, grilla 3→1
- [ ] 3.4 `ProgramSteps.astro`: ruta de 4 pasos con iconos y colores por paso; zigzag con línea punteada en ≥ 768 px, columna vertical en móvil; nota de enfoque de género e inclusión
- [ ] 3.5 `Training.astro`: tarjeta amarilla "Estudia 100% virtual, a tu ritmo" con checklist y desglose 20h/40h/60h
- [ ] 3.6 `Curriculum.astro` ("Qué vas a aprender"): bloque de habilidades para el empleo (6 temas) + 3 tarjetas de módulos técnicos con temarios completos + 4 chips de condiciones
- [ ] 3.7 `Companies.astro`: fondo azul, titular, párrafo, CTA "Quiero ser empresa aliada" (canal configurable) y 4 tarjetas de beneficio
- [ ] 3.8 `Faq.astro`: acordeón `<details>/<summary>` con las 4 preguntas, primera abierta
- [ ] 3.9 `WhatsAppBand.astro` y `Footer.astro`: banda teal de contacto + footer oscuro con lema y logos "Con el apoyo de"

## 4. Conversión (lead-capture)

- [ ] 4.1 Helper `whatsappHref()` en `site.ts`: genera `wa.me` con mensaje precodificado o fallback `#inscripcion` si no hay número; usarlo en todos los CTAs de WhatsApp
- [ ] 4.2 `Registration.astro` (`#inscripcion`): iframe Zoho lazy con altura reservada y `title` cuando `ZOHO_FORM_URL` exista; estado "próximamente" con CTA a WhatsApp cuando no
- [ ] 4.3 Botón flotante de WhatsApp en móvil (aparece tras el hero, área táctil ≥ 44 px, no obstruye CTAs ni formulario)
- [ ] 4.4 Auditar que todo elemento con apariencia de botón sea `<a href>` funcional (sin `<span>` decorativos)

## 5. SEO y accesibilidad (seo-accessibility)

- [ ] 5.1 Generar imagen social `og-image` (1200×630) de marca y conectarla en el Layout
- [ ] 5.2 JSON-LD `FAQPage` generado desde el array de FAQs de `site.ts`
- [ ] 5.3 Instalar `@astrojs/sitemap`, configurar `site` en `astro.config.mjs` (placeholder documentado si no hay dominio) y añadir `robots.txt`
- [ ] 5.4 Pasada de accesibilidad: jerarquía de encabezados, landmarks, alt text, contraste (ink sobre amarillo), foco visible, navegación completa por teclado

## 6. Verificación

- [ ] 6.1 Probar responsive en 360/768/1024/1440 px con el dev server (`astro dev --background`) y browser: sin scroll horizontal, zigzag→columna, menú móvil funcional
- [ ] 6.2 `astro build` limpio y auditoría Lighthouse móvil sobre el build: ≥ 90 en las cuatro categorías; corregir lo que falle
- [ ] 6.3 Auditoría axe/Lighthouse de accesibilidad sin violaciones; validar JSON-LD con un validador de schema
- [ ] 6.4 Revisión final contra las specs (checklist de scenarios) y captura de pantalla de cada sección para revisión del cliente
