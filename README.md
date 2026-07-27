# Talento Sin Fronteras — Landing Page

Landing page estática del programa **Talento Sin Fronteras**, una iniciativa de la **GIZ**, la **Unión Europea**, la **Cooperación Alemana** y la **Fundación Colombia Incluyente** que ofrece orientación laboral, formación certificada gratuita y colocación laboral para personas migrantes y colombianas en Cúcuta, Bucaramanga y Bogotá D.C.

## Tecnologías

- **[Astro](https://astro.build)** — Framework de generación de sitios estáticos
- **[Tailwind CSS](https://tailwindcss.com)** v4 — Estilos utilitarios
- **TypeScript** — Tipado estático
- **[Bun](https://bun.sh)** — Runtime y gestor de paquetes

## Comandos

| Comando | Acción |
|---|---|
| `bun install` | Instalar dependencias |
| `bun run dev` | Iniciar servidor de desarrollo en `localhost:4321` |
| `bun run build` | compilar sitio estático en `./dist/` |
| `bun run preview` | Previsualizar la compilación localmente |

## Sitio

Una sola página (`/`) con las siguientes secciones:

1. **Header** — Barra de navegación fija con anclas y CTA
2. **Hero** — Título principal, CTAs y foto familiar
3. **Eligibility Bar** — Criterios de elegibilidad rápidos
4. **Audience** — Tarjetas de público objetivo
5. **Program Steps** — Hoja de ruta del programa en 4 pasos
6. **Training** — Beneficios de la formación virtual
7. **Curriculum** — Temario detallado (60h)
8. **Companies** — Sección para empresas aliadas
9. **Registration** — Formulario Zoho Forms embebido
10. **FAQ** — Acordeón accesible con `<details>`/`<summary>`
11. **Footer** — Logos de organizaciones aliadas

## Estructura del proyecto

```
src/
├── assets/         # Fuentes e imágenes
├── components/     # 17 componentes Astro
├── data/           # Texto y configuración centralizada
├── layouts/        # Layout principal HTML
├── pages/          # index.astro y robots.txt
├── styles/         # global.css (Tailwind + diseño)
└── utils/          # Utilidades (colores)
```

## Construcción

El sitio se compila en `./dist/` como HTML, CSS y assets estáticos. Sin JavaScript en el bundle del cliente, excepto dos scripts ligeros (menú móvil).

Configurar la URL real del sitio en `astro.config.mjs` (actualmente `https://talentosinfronteras.example.org`).

## Licencia

Este proyecto es de código abierto. Consulta el archivo `openspec/changes/add-tsf-landing-page/proposal.md` para más contexto sobre el alcance y la justificación del proyecto.
