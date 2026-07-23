# Tasks: Landing "Talento Sin Fronteras"

## 1. Fundaciones (brand-theme)

- [x] 1.1 Definir tokens `@theme` en `src/styles/global.css`: colores de marca (teal, blue, yellow, coral, ink) y familias tipográficas (`--font-display`, `--font-sans`)
- [x] 1.2 Instalar y registrar Montserrat self-hosted (pesos 400–900, woff2, `font-display: swap`); registrar `@font-face` de Lemon Milk Bold desde `src/assets/fonts/LEMONMILK-Bold.woff2` (ya en el repo) con fallback Montserrat 900
- [x] 1.3 Crear componentes base: `Button.astro` (variantes coral/teal/outline, pill, foco visible), estilo `kicker` y estilo de título display (uppercase, line-height compacto)
- [x] 1.4 Crear `src/data/site.ts` con todo el copy (secciones, municipios, pasos, temarios, FAQs) y constantes de conversión (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `ZOHO_FORM_URL`, contacto empresas) tipadas (incluye `whatsappHref()`)
- [x] 1.5 Extraer assets del bundle de referencia a `src/assets/images/`: logo TSF, foto de hero (recorte transparente oficial), logos de aliados (Cooperación Alemana/UE/GIZ), y favicon derivado del isotipo (mano+corazón) en `public/`; iconos de UI como componentes (`Icon.astro`, `IconWhatsapp.astro`)

## 2. Layout y esqueleto de página

- [x] 2.1 Reescribir `src/layouts/Layout.astro`: `lang="es"`, props de título/descripción, metadatos base, canonical, Open Graph/Twitter, favicon, slot para JSON-LD
- [x] 2.2 Limpiar el scaffold de Astro: eliminar `src/components/Welcome.astro`, `src/assets/astro.svg`, `src/assets/background.svg` y el favicon por defecto de `public/` (lo reemplaza el de marca en 2.1); verificado con grep (sin referencias) y `astro build` limpio; `src/pages/index.astro` reescrito como composición con `<main>` (se completa en el grupo 3)
- [x] 2.3 Crear `Header.astro`: logo, anclas (El proyecto, Beneficios, Preguntas, Empresas), CTA "Regístrate", menú hamburguesa accesible (< 768 px) con script vanilla mínimo

## 3. Secciones de contenido (landing-page)

- [x] 3.1 `Hero.astro`: fondo teal, kicker "Convocatoria abierta", `<h1>` "Cada trayecto merece una oportunidad", párrafo, CTAs (Quiero participar + WhatsApp outline), foto LCP eager con `fetchpriority="high"`, layout responsive
- [x] 3.2 `EligibilityBar.astro`: franja amarilla con el resumen de elegibilidad (texto ink sobre amarillo)
- [x] 3.3 `Audience.astro` ("¿Es para ti?"): 3 tarjetas + listado de municipios, grilla 3→1
- [x] 3.4 `ProgramSteps.astro`: ruta de 4 pasos con iconos y colores por paso; zigzag con línea punteada en ≥ 768 px, columna vertical en móvil; nota de enfoque de género e inclusión
- [x] 3.5 `Training.astro`: tarjeta amarilla "Estudia 100% virtual, a tu ritmo" con checklist y desglose 20h/40h/60h
- [x] 3.6 `Curriculum.astro` ("Qué vas a aprender"): bloque de habilidades para el empleo (6 temas) + 3 tarjetas de módulos técnicos con temarios completos + 4 chips de condiciones
- [x] 3.7 `Companies.astro`: fondo azul, titular, párrafo, CTA "Quiero ser empresa aliada" (canal configurable) y 4 tarjetas de beneficio
- [x] 3.8 `Faq.astro`: acordeón `<details>/<summary>` con las 4 preguntas, primera abierta
- [x] 3.9 `WhatsAppBand.astro` y `Footer.astro`: banda teal de contacto + footer oscuro con lema y logos "Con el apoyo de" (incluye el 4º logo, Fundación Colombia Incluyente, recortado del PDF de assets)

## 4. Conversión (lead-capture)

- [x] 4.1 Helper `whatsappHref()` en `site.ts`: genera `wa.me` con mensaje precodificado o fallback `#inscripcion` si no hay número; usado en todos los CTAs de WhatsApp
- [x] 4.2 `Registration.astro` (`#inscripcion`): iframe Zoho lazy con altura reservada y `title` cuando `ZOHO_FORM_URL` exista; estado "próximamente" con CTA a WhatsApp cuando no
- [x] 4.3 Botón flotante de WhatsApp en móvil (`WhatsAppFloatingButton.astro`, aparece tras salir del `#hero` vía `IntersectionObserver`, 56×56px, `md:hidden`)
- [x] 4.4 Auditado: único `<button>` es el toggle del menú móvil (control de UI, no CTA); todos los CTAs usan `Button.astro` → `<a href>` real (ancla o `wa.me`)

## 5. SEO y accesibilidad (seo-accessibility)

- [x] 5.1 Generar imagen social `og-image.webp` (1200×630, WebP) de marca y conectarla en el Layout (Open Graph + Twitter Card, con `og:image:type/width/height`)
- [x] 5.2 JSON-LD `FAQPage` generado desde el array de FAQs de `site.ts` (en `Faq.astro`, misma fuente que el acordeón visible)
- [x] 5.3 `@astrojs/sitemap` instalado y configurado con `site` (placeholder documentado en `astro.config.mjs`); `robots.txt` como endpoint dinámico (`src/pages/robots.txt.ts`) sincronizado con `site`
- [x] 5.4 Pasada de accesibilidad: jerarquía de encabezados (un `h1`, `h2`/`h3` correctos), landmarks (`header`/`nav`/`main`/`footer`), alt text completo, foco visible global. **Auditoría de contraste WCAG AA calculada (no solo revisada visualmente)**: se detectó que el coral de marca (#FF6A4A) y el amarillo de marca (#F8CA2E) no alcanzan 4.5:1 como texto o con texto blanco encima — se introdujo el token `--color-coral-strong` (#B24A34, ≥4.5:1 en blanco y fondos claros) para botones/kickers/fondos con texto, se reasignó el rol `text` de amarillo a `ink`, y se oscurecieron dos grises (`neutral-500`→`600`, `neutral-400`→`600`) que fallaban; el coral/amarillo de marca originales se conservan para bordes e iconos decorativos

## 6. Verificación

- [x] 6.1 Probado responsive en 375/768/1280 px vía dev server + navegador (computed styles, no hubo screenshots disponibles en esta sesión — ver nota abajo): sin scroll horizontal en ningún ancho, grillas 3→1 y zigzag→columna confirmados por CSS computado, nav de escritorio ⇄ menú hamburguesa confirmado por `display`
- [x] 6.2 `astro build` limpio (sin errores/warnings). Lighthouse CLI no pudo ejecutarse (no hay Chrome/Chromium instalado en esta máquina); se hizo en su lugar un análisis estático del build de producción: `dist/` pesa 640 KB total, cero JS de framework (solo los dos `<script>` inline del menú móvil y el botón flotante), HTML 32 KB, CSS 41 KB — coherente con el presupuesto de rendimiento del diseño
- [x] 6.3 JSON-LD `FAQPage` verificado por inspección directa (estructura `mainEntity`/`Question`/`acceptedAnswer` contra el esquema de schema.org) — no se auditó con axe/Lighthouse por la misma falta de Chrome local
- [x] 6.4 Revisión final contra las specs: recorrido manual de cada requirement/scenario de los 4 spec files; contraste WCAG recalculado con precisión matemática para cada combinación texto/fondo realmente usada en el código (no solo inspección visual), lo que encontró y corrigió 5 fallas reales de contraste (ver 5.4)

**Nota sobre herramientas de esta sesión**: el navegador integrado no pudo tomar capturas de pantalla (timeout) ni sostener estado de scroll vía JS en esta sesión — probablemente una limitación puntual del entorno, no del sitio. Se verificó todo lo posible sin imágenes: texto de página, consola sin errores, red sin fallos, y estilos computados (`getComputedStyle`) en 3 anchos de viewport. **Recomendación**: antes de dar el sitio por aprobado visualmente, alguien debería abrirlo en un navegador real (`bun run dev`, o revisar el deploy) y confirmar el aspecto — el código y el comportamiento están verificados, pero no hay confirmación visual pixel a pixel en este change.
