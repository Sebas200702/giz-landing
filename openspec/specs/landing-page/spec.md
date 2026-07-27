# Spec: landing-page

## Purpose

Define the structure and components of the single-page landing website, outlining the section order, responsive layouts, navigation anchor behavior, and content module references.

## Requirements

### Requirement: Página única con todas las secciones

La ruta `/` SHALL renderizar, en este orden, las secciones: (1) header con navegación, (2) hero, (3) franja de convocatoria, (4) "¿Es para ti?", (5) ruta de 4 pasos, (6) formación virtual, (7) temario ("Qué vas a aprender"), (8) empresas aliadas, (9) inscripción, (10) preguntas frecuente y (12) footer. Cada sección SHALL ser un componente Astro independiente y el contenido textual SHALL provenir del módulo de datos central (`src/data/site.ts`).

#### Scenario: Estructura completa

- **WHEN** un visitante abre `/`
- **THEN** las 12 secciones aparecen en el orden definido, cada una con el copy del diseño de referencia

### Requirement: Limpieza del scaffold de Astro

El proyecto SHALL eliminar todos los componentes y assets del scaffold básico de Astro que no forman parte de la landing: `src/components/Welcome.astro`, `src/assets/astro.svg`, `src/assets/background.svg` y el favicon por defecto de Astro en `public/` (reemplazado por el favicon de marca). Tras la limpieza NO SHALL quedar imports, referencias ni archivos huérfanos del scaffold en el codebase, y el build SHALL completar sin errores.

#### Scenario: Archivos del scaffold eliminados

- **WHEN** se inspecciona el codebase tras implementar
- **THEN** no existen `Welcome.astro`, `astro.svg`, `background.svg` ni el favicon por defecto de Astro, y ninguna búsqueda de referencias a ellos arroja resultados

#### Scenario: Build limpio tras la limpieza

- **WHEN** se ejecuta `astro build` después de eliminar el scaffold
- **THEN** el build termina sin errores ni warnings por imports rotos

### Requirement: Navegación por anclas con menú móvil

El header SHALL mostrar el logo del proyecto, enlaces de ancla a "El proyecto", "Beneficios", "Preguntas" y "Empresas", y un CTA "Regístrate" que lleva a la sección de inscripción. En viewports < 768 px los enlaces SHALL colapsar a un menú hamburguesa accesible (botón con `aria-expanded`, operable por teclado). Los enlaces SHALL desplazarse con scroll suave a secciones con `id` estables (`#proyecto`, `#beneficios`, `#preguntas`, `#empresas`, `#inscripcion`).

#### Scenario: Ancla en desktop

- **WHEN** el usuario hace clic en "Beneficios" desde un viewport ≥ 768 px
- **THEN** la página se desplaza suavemente hasta la sección de la ruta de 4 pasos

#### Scenario: Menú móvil

- **WHEN** el usuario abre el menú hamburguesa en un viewport de 360 px y elige un enlace
- **THEN** el menú se cierra y la página navega al ancla correspondiente

### Requirement: Hero de convocatoria

El hero SHALL mostrar sobre fondo teal: el kicker "Convocatoria abierta", el titular "Cada trayecto merece una oportunidad" como único `<h1>` de la página, el párrafo de acompañamiento, un CTA primario "Quiero participar" (ancla a inscripción), junto con la fotografía de la campaña. En móvil el texto SHALL mantenerse legible (contraste AA) sin quedar oculto tras la imagen.

#### Scenario: Hero en móvil

- **WHEN** se carga el hero en un viewport de 360 px
- **THEN** titular, párrafo y ambos CTAs son visibles y legibles sin scroll horizontal

### Requirement: Franja de elegibilidad

Inmediatamente bajo el hero, una franja amarilla SHALL resumir la elegibilidad: "Para mayores de 18 años, sin empleo · Cúcuta · Bucaramanga · Bogotá D.C. · Gratuito".

#### Scenario: Franja visible

- **WHEN** el usuario hace scroll más allá del hero
- **THEN** ve la franja amarilla con el texto de elegibilidad completo en cualquier ancho de pantalla

### Requirement: Sección "¿Es para ti?"

La sección SHALL presentar tres tarjetas de audiencia (+18 / Todas y todos / 3 regiones) con los textos del diseño, seguidas del listado de municipios cubiertos (Cúcuta, Villa del Rosario, Los Patios, El Zulia, Bucaramanga, Floridablanca, Girón, Piedecuesta, Bogotá D.C., Soacha, Chía). La grilla SHALL ser de 3 columnas en desktop y 1 columna en móvil.

#### Scenario: Grilla responsive

- **WHEN** el viewport pasa de ≥ 1024 px a 360 px
- **THEN** las tarjetas pasan de 3 columnas a una columna apilada sin desbordes

### Requirement: Ruta de 4 pasos

La sección "Un camino completo hacia el empleo" SHALL mostrar los 4 pasos (Orientación laboral personalizada, Formación gratuita y certificada, Acompañamiento psicosocial, Conexión con empresas aliadas) numerados, cada uno con icono y color de marca distintivo, y cerrar con la nota "Todo el proceso con enfoque de género e inclusión." En desktop (≥ 768 px) SHALL usar el layout tipo timeline alternado (zigzag) con línea punteada; en móvil SHALL colapsar a una columna vertical con la línea a un costado.

#### Scenario: Timeline en desktop

- **WHEN** se ve la sección en ≥ 768 px
- **THEN** los pasos alternan izquierda/derecha alrededor de una línea punteada central, en orden 1→4

#### Scenario: Timeline en móvil

- **WHEN** se ve la sección en < 768 px
- **THEN** los 4 pasos se apilan verticalmente conservando numeración, iconos y colores

### Requirement: Sección de formación virtual

La sección SHALL presentar, sobre tarjeta amarilla: el título "Estudia 100% virtual, a tu ritmo", la checklist de 4 beneficios y el desglose "Tu ruta de formación" (20h Habilidades para el empleo + 40h Habilidades técnicas = 60 horas en total).

#### Scenario: Desglose de horas

- **WHEN** el usuario lee la tarjeta "Tu ruta de formación"
- **THEN** ve 20h, 40h y el total de 60 horas con sus descripciones

### Requirement: Temario de formaciones

La sección "Qué vas a aprender" SHALL listar: (a) los 6 temas de "Habilidades para el empleo · 20 h" y (b) los 3 módulos técnicos — Servicio al cliente, Ventas, y Logística y cadena de abastecimiento (· 13,3 h cada uno) — con sus temarios completos del diseño de referencia, más los 4 chips de condiciones (100% virtual, a tu ritmo, certificación).

#### Scenario: Módulos técnicos completos

- **WHEN** el usuario revisa la sección
- **THEN** encuentra los tres módulos con todos sus ítems de temario y la duración de cada uno

### Requirement: Sección para empresas aliadas

La sección SHALL mostrar, sobre fondo azul `#003399`: el titular "¿Buscas talento comprometido?", el párrafo de invitación, el CTA "Quiero ser empresa aliada" y las 4 tarjetas de beneficio (Talento formado y motivado, Acompañamiento en la vinculación, Impacto social medible, Alianza con cooperación internacional). El CTA SHALL enlazar a un canal de contacto real (correo del proyecto, configurable en el módulo de datos).

#### Scenario: Contacto de empresas

- **WHEN** una empresa interesada hace clic en "Quiero ser empresa aliada"
- **THEN** se abre el canal de contacto configurado (no un enlace muerto)

### Requirement: Preguntas frecuentes

La sección FAQ SHALL renderizar las 4 preguntas del diseño (quién puede participar, costo, horas de estudio, cómo inscribirse) como acordeón nativo `<details>/<summary>`, con la primera pregunta abierta por defecto y las respuestas completas del diseño de referencia.

#### Scenario: Acordeón por teclado

- **WHEN** el usuario navega con Tab hasta una pregunta y presiona Enter
- **THEN** la respuesta se expande o colapsa sin JavaScript adicional

### Requirement: Footer institucional

El footer SHALL mostrar sobre fondo oscuro: el logo de Talento Sin Fronteras, el lema "Oportunidades para quienes construyen un nuevo comienzo.", y el bloque "Con el apoyo de" con los logos de los aliados (Cooperación Alemana, Unión Europea, GIZ, Fundación Colombia Incluyente) sobre soporte claro que preserve su legibilidad.

#### Scenario: Logos de aliados

- **WHEN** se renderiza el footer
- **THEN** los logos institucionales aparecen completos, con alt text, en el orden del manual de assets
