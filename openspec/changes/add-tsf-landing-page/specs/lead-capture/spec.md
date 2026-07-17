# Spec: lead-capture

## ADDED Requirements

### Requirement: Configuración central de conversión

Las constantes de conversión (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `ZOHO_FORM_URL`, contacto de empresas) SHALL vivir en un único módulo (`src/data/site.ts`). Ningún componente SHALL construir enlaces de WhatsApp o del formulario con valores propios.

#### Scenario: Actualizar el número de WhatsApp

- **WHEN** el cliente entrega el número oficial y se actualiza la constante
- **THEN** todos los CTAs de WhatsApp de la página quedan actualizados sin tocar ningún componente

### Requirement: CTAs de WhatsApp

Todos los CTAs de WhatsApp (hero, banda de contacto, FAQ "cómo me inscribo", botón flotante) SHALL generar deep links `https://wa.me/<número>?text=<mensaje precodificado>` que abren en pestaña nueva con `rel="noopener"`. Mientras `WHATSAPP_NUMBER` no esté configurado, esos CTAs SHALL degradar a ancla `#inscripcion` en lugar de publicar un enlace roto.

#### Scenario: Número configurado

- **WHEN** `WHATSAPP_NUMBER` tiene valor y el usuario toca "Escríbenos por WhatsApp"
- **THEN** se abre WhatsApp con el chat del proyecto y el mensaje precargado

#### Scenario: Número pendiente

- **WHEN** `WHATSAPP_NUMBER` está vacío
- **THEN** el mismo CTA lleva a la sección de inscripción y no existe ningún `href` a `wa.me` en el HTML generado

### Requirement: Botón flotante de WhatsApp en móvil

En viewports < 768 px, la página SHALL mostrar un botón flotante de WhatsApp fijo en la esquina inferior, visible tras hacer scroll más allá del hero, que no obstruya los CTAs de las secciones ni el formulario y respete el área táctil mínima de 44×44 px.

#### Scenario: Aparición al hacer scroll

- **WHEN** el usuario en móvil hace scroll más allá del hero
- **THEN** el botón flotante aparece y permanece accesible durante el resto de la página

### Requirement: Formulario de inscripción Zoho embebido

La sección de inscripción (`#inscripcion`) SHALL embeber el formulario de Zoho vía iframe con `loading="lazy"`, `title` descriptivo y altura reservada que evite saltos de layout (CLS). Si `ZOHO_FORM_URL` no está configurada, la sección SHALL mostrar un estado "inscripciones próximamente" con CTA alternativo a WhatsApp — nunca campos de formulario falsos que no envían datos.

#### Scenario: Formulario configurado

- **WHEN** `ZOHO_FORM_URL` tiene valor
- **THEN** el iframe de Zoho se carga de forma diferida dentro de la sección de inscripción y es utilizable en móvil y desktop

#### Scenario: Formulario pendiente

- **WHEN** `ZOHO_FORM_URL` está vacía
- **THEN** la sección muestra el estado "próximamente" con el CTA alternativo y no renderiza ningún iframe ni campos decorativos

### Requirement: Todos los CTAs conducen a una acción real

Cada botón o CTA de la página SHALL ser un enlace funcional (`<a href>`) hacia un ancla interna, un deep link de WhatsApp o el formulario. La página NO SHALL contener botones decorativos sin destino (como los `<span>` del mockup).

#### Scenario: Auditoría de CTAs

- **WHEN** se recorren todos los elementos con apariencia de botón en el HTML generado
- **THEN** cada uno es un `<a>` con `href` válido (ancla existente o URL externa configurada)
