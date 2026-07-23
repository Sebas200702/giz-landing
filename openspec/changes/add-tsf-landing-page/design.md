# Design: Landing "Talento Sin Fronteras"

## Context

Repositorio `giz-landing` recién inicializado: Astro 7 + Tailwind 4 (vía `@tailwindcss/vite`), sin contenido propio (solo el scaffold `Welcome.astro`). Existen tres insumos de referencia:

- **Assets de marca** (PDF): paleta (#0B7285 teal, #003399 azul, #F8CA2E amarillo, #FF6A4A coral, #3C3C3B gris oscuro, #FFFFFF), tipografías (Lemon Milk Bold títulos, Montserrat Medium textos), logos del proyecto y de aliados (Cooperación Alemana, Unión Europea, GIZ, Fundación Colombia Incluyente), iconografía de trazo a mano en coral y motivos de "olas".
- **Mockup HTML + Design.pdf**: landing de una sola página con 11 secciones, copy completo en español, desktop-only (grillas fijas, sin menú móvil, CTAs como `<span>` sin enlaces, formulario Zoho como placeholder dibujado).

El mandato es **adaptar y mejorar**, no clonar. La audiencia objetivo (personas migrantes y colombianas buscando empleo) navega mayormente desde celulares con datos limitados, así que móvil y peso de página mandan.

## Goals / Non-Goals

**Goals:**

- Landing estática de una página, en español, con las 11 secciones del diseño de referencia y su copy.
- Mobile-first y responsive real en 360px–1440px+.
- Sistema de diseño de marca expresado como tokens Tailwind 4 reutilizables.
- Conversión funcional: anclas de navegación, deep links de WhatsApp, sección de formulario Zoho lista para recibir el embed real.
- SEO/social completo y accesibilidad WCAG 2.1 AA.
- Lighthouse móvil ≥ 90 en Performance/Accessibility/Best Practices/SEO.

**Non-Goals:**

- CMS o contenido editable (el copy vive en el código/constantes; se puede migrar a content collections después).
- Backend propio, base de datos o manejo de envíos del formulario (lo resuelve Zoho).
- Multi-idioma (solo español por ahora; la estructura no lo impide a futuro).
- Analytics/pixel de seguimiento (se decidirá con el cliente; se deja punto de extensión en el Layout).
- Réplica pixel-perfect del mockup.

## Decisions

### D1 — Un componente Astro por sección, página única

`src/pages/index.astro` compone ~12 componentes (`Header`, `Hero`, `EligibilityBar`, `Audience`, `ProgramSteps`, `Training`, `Curriculum`, `Companies`, `Registration`, `Faq`, `WhatsAppBand`, `Footer`) bajo `src/layouts/Layout.astro`. Alternativa considerada: todo inline en `index.astro` (como el mockup) — descartada por mantenibilidad y para poder iterar sección por sección.

### D2 — Copy y configuración centralizados en `src/data/site.ts`

Textos largos, listados (municipios, temarios de módulos, FAQs) y constantes de conversión (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `ZOHO_FORM_URL`) viven en un módulo de datos tipado. Razón: los insumos pendientes (número de WhatsApp, URL de Zoho) se conectan cambiando una constante, y el copy se revisa sin bucear en markup. Alternativa: content collections — sobredimensionado para una sola página.

### D3 — Tokens de marca con `@theme` de Tailwind 4

En `src/styles/global.css`:

```css
@theme {
  --color-teal: #0B7285;
  --color-blue: #003399;
  --color-yellow: #F8CA2E;
  --color-coral: #FF6A4A;
  --color-ink: #3C3C3B;
  --font-display: "Lemon Milk", "Montserrat", sans-serif;
  --font-sans: "Montserrat", system-ui, sans-serif;
}
```

Genera utilidades (`bg-teal`, `text-coral`, `font-display`) sin config JS. Estilos compartidos (botón pill, kicker, título display) como clases de componente en CSS o componentes Astro (`Button.astro`), no copiando cadenas largas de utilidades.

### D4 — Tipografías self-hosted; Lemon Milk con fallback controlado

Montserrat (400/600/700/800/900) via `@fontsource-variable/montserrat` o woff2 locales en `src/assets/fonts/` con `font-display: swap`. **Lemon Milk Bold ya está en el repo** (`src/assets/fonts/LEMONMILK-Bold.woff2`, 21 KB, convertida desde el OTF v5.0): se registra como `@font-face` con fallback a Montserrat 900. Licencia: donationware de MARSNEV — gratis para uso sin ánimo de lucro/caritativo (ver `LEMONMILK-LICENSE.txt` junto a la fuente); para uso comercial se sugiere donación voluntaria. La fuente solo trae mayúsculas, consistente con el uso uppercase del manual. Nada se carga desde Google Fonts en runtime (privacidad + rendimiento + resiliencia con datos limitados).

### D5 — Responsive: el zigzag se vuelve columna

El timeline de 4 pasos (zigzag alternado con línea punteada central) solo existe en ≥`md`; en móvil es una columna con la línea a la izquierda y las tarjetas apiladas — patrón más legible y sin CSS frágil de posicionamiento absoluto. Grillas 3→1 col, hero apila texto sobre imagen, nav colapsa a menú hamburguesa (único JS de la página, `<script>` vanilla inline de Astro; sin framework de islas).

### D6 — WhatsApp como canal primario de conversión secundaria

Todos los CTAs de WhatsApp generan `https://wa.me/<número>?text=<mensaje>` desde las constantes de D2. En móvil se añade un botón flotante/sticky de WhatsApp (mejora sobre el mockup: la audiencia convierte más por chat que por formulario). Mientras no exista número real, los CTAs apuntan a `#inscripcion` (fallback definido en la constante) para no publicar un enlace roto.

### D7 — Zoho como embed diferido con placeholder honesto

`Registration.astro` renderiza el iframe de Zoho solo si `ZOHO_FORM_URL` está definido; si no, muestra una tarjeta "próximamente" con CTA alternativo a WhatsApp. El iframe se carga con `loading="lazy"` y `title` accesible. Razón: no bloquear el lanzamiento por un insumo externo y no fingir un formulario que no envía nada (el mockup dibuja campos falsos).

### D8 — Imágenes por `astro:assets`, hero como `<Image>` con `priority`

Fotos y logos en `src/assets/` procesados a AVIF/WebP responsive. La foto del hero es el LCP: `loading="eager"` + `fetchpriority="high"` y `widths` acotados. Los logos de aliados se extraen del PDF de assets como SVG/PNG transparente. Alt text descriptivo obligatorio.

### D9 — SEO en el Layout + JSON-LD de FAQ

`Layout.astro` acepta props de título/descripción y emite: metadatos base, canonical, Open Graph/Twitter card con `og-image` de marca (1200×630, generada a partir de la pieza gráfica del hero), `lang="es"`, favicon derivado del logo. JSON-LD `FAQPage` se genera desde el mismo array de FAQs de D2 (una sola fuente de verdad). `@astrojs/sitemap` + `robots.txt` (requiere fijar `site` en `astro.config.mjs` cuando exista el dominio; mientras tanto, placeholder documentado).

### D10 — FAQ con `<details>/<summary>` nativos

Sin JS: acordeón nativo estilizado, primera pregunta abierta por defecto. Accesible por teclado de fábrica. Alternativa (ARIA accordion con JS) descartada por complejidad innecesaria.

### D11 — `coral-strong`: una sombra derivada para texto sobre coral (descubierta en implementación)

Calculando contraste WCAG durante la implementación se encontró que el coral de marca (`#FF6A4A`) sobre blanco, y blanco sobre coral, dan ~2.83:1 — muy por debajo del 4.5:1 exigido por `seo-accessibility` para texto normal (y del propio 3:1 de texto grande). Lo mismo ocurre con el amarillo de marca (`#F8CA2E`) usado como color de texto (1.56:1 sobre blanco). Estos colores fueron diseñados como acentos visuales, no para llevar texto directamente.

Se añadió un token derivado `--color-coral-strong: #B24A34` (≥4.5:1 sobre blanco y sobre el fondo gris claro `#f4f3f0`) para: fondo de `.btn-coral`, fondo de la sección de inscripción, botón flotante de WhatsApp, y como color de texto/acento (`ACCENTS.coral`). El token `--color-coral` original permanece intacto para usos decorativos sin texto encima (bordes superiores de tarjetas). Para amarillo, en vez de inventar un tono "amarillo oscuro" que dejaría de leerse como amarillo, el rol de texto de `ACCENTS.yellow` se reasignó a `ink` (ya usado como su pareja de fondo). Dos grises de Tailwind (`neutral-400`, `neutral-500`) también se oscurecieron a `neutral-600` donde fallaban (2.58:1 y 4.27:1 respectivamente).

Alternativa descartada: mantener los colores de marca exactos y agrandar/oscurecer solo el texto (variar tamaño para calificar como "texto grande" con umbral 3:1) — se descartó porque exigía agrandar el texto de todos los botones del sitio de forma perceptible, un cambio visual mayor para un problema que se resuelve con un solo tono derivado.

Los valores exactos de `brand-theme/spec.md` (`--color-coral: #FF6A4A`, etc.) no cambian; `coral-strong` es una adición, no una modificación de esos requirements.

## Risks / Trade-offs

- **[Lemon Milk solo tiene mayúsculas y sin acentos garantizados]** → Se usa exclusivamente en títulos uppercase (como indica el manual); cualquier texto con minúsculas o caracteres fuera de su cobertura cae al fallback Montserrat del mismo stack. Verificar en implementación que "¿", "É", "Ú" rendericen bien en los titulares.
- **[Embed de Zoho es un tercero]** → iframe lazy + placeholder condicional (D7); si Zoho cae o cambia la URL, la página sigue funcionando y el canal WhatsApp queda como respaldo. El iframe puede afectar CLS: se reserva altura fija.
- **[Fotos de referencia en baja resolución / sin derechos confirmados]** → Se usan las del PDF como provisionales marcadas `TODO`; el build no depende de ellas (cualquier imagen del mismo aspect ratio sirve).
- **[Copy legal/institucional (logos UE/GIZ) tiene reglas de uso]** → El footer replica el orden y la jerarquía del PDF de assets ("Con el apoyo de"); cualquier ajuste es un cambio de assets, no de estructura.
- **[Número de WhatsApp inexistente al lanzar]** → Fallback a `#inscripcion` (D6) evita enlaces rotos, a costa de un CTA menos directo hasta tener el dato.
- **[Página única larga en conexiones lentas]** → Presupuesto: HTML+CSS < 100KB comprimidos antes de imágenes; imágenes lazy salvo hero; sin fuentes externas ni JS de framework.

## Migration Plan

Proyecto nuevo, sin usuarios previos: se reemplaza el scaffold en una sola PR. Rollback = revertir la PR. El deploy (hosting/dominio) se decide fuera de este change; `astro build` produce estático servible en cualquier CDN.

## Open Questions

1. **Número de WhatsApp** oficial y mensaje precargado deseado.
2. **URL/código embed del formulario Zoho** (y campos que incluirá).
3. **Dominio final** (necesario para `site` en `astro.config.mjs`, canonical y sitemap).
4. ~~Archivos de Lemon Milk Bold~~ — **Resuelto**: LEMON MILK v5.0 (donationware) ya está en `src/assets/fonts/`. Pendiente solo confirmar si el proyecto quiere hacer la donación voluntaria a MARSNEV.
5. **Fotos definitivas** con derechos de uso (las del mockup parecen de banco/campaña).
6. ¿Se requiere **analytics** (GA4, Meta Pixel) y aviso de privacidad/cookies asociado?
