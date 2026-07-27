# Spec: lead-capture

## Purpose

Define the integration of lead capture mechanisms, registration forms, CTAs, and their central configuration files.

## Requirements

### Requirement: Configuración central de conversión

Las constantes de conversión (`ZOHO_FORM_URL`, contacto de empresas) SHALL vivir en un único módulo (`src/data/site.ts`). Ningún componente SHALL construir enlaces del formulario con valores propios.

### Requirement: Formulario de inscripción Zoho embebido

La sección de inscripción (`#inscripcion`) SHALL embeber el formulario de Zoho vía iframe con `loading="lazy"`, `title` descriptivo y altura reservada que evite saltos de layout (CLS). Si `ZOHO_FORM_URL` no está configurada, la sección SHALL mostrar un estado "inscripciones próximamente" y nunca campos de formulario falsos que no envían datos.

#### Scenario: Formulario configurado

- **WHEN** `ZOHO_FORM_URL` tiene valor
- **THEN** el iframe de Zoho se carga de forma diferida dentro de la sección de inscripción y es utilizable en móvil y desktop

#### Scenario: Formulario pendiente

- **WHEN** `ZOHO_FORM_URL` está vacía
- **THEN** la sección muestra el estado "próximamente" con el CTA alternativo y no renderiza ningún iframe ni campos decorativos

### Requirement: Todos los CTAs conducen a una acción real

Cada botón o CTA de la página SHALL ser un enlace funcional (`<a href>`) hacia un ancla interna o el formulario. La página NO SHALL contener botones decorativos sin destino (como los `<span>` del mockup).

#### Scenario: Auditoría de CTAs

- **WHEN** se recorren todos los elementos con apariencia de botón en el HTML generado
- **THEN** cada uno es un `<a>` con `href` válido (ancla existente o URL externa configurada)
