// Mapa de utilidades Tailwind por color de acento — las clases están escritas
// literalmente aquí para que el escáner de Tailwind las detecte (evita construir
// nombres de clase dinámicamente, lo que rompería la generación de CSS).
export type Accent = "teal" | "coral" | "blue" | "yellow";

export const ACCENTS: Record<
  Accent,
  { bg: string; fg: string; text: string; border: string }
> = {
  teal: { bg: "bg-teal", fg: "text-white", text: "text-teal", border: "border-teal" },
  // El coral puro (#FF6A4A) no alcanza 4.5:1 con blanco (WCAG AA) — bg/text
  // usan la sombra oscurecida `coral-strong`; `border` conserva el coral de
  // marca porque es un acento decorativo, no texto.
  coral: { bg: "bg-coral-strong", fg: "text-white", text: "text-coral-strong", border: "border-coral" },
  blue: { bg: "bg-blue", fg: "text-white", text: "text-blue", border: "border-blue" },
  // El amarillo de marca (#F8CA2E) tampoco alcanza 4.5:1 como texto sobre
  // fondos claros — `text` usa `ink`, igual que su pareja `fg` sobre fondo
  // amarillo, en vez de inventar un amarillo oscurecido que ya no se vería
  // "amarillo".
  yellow: { bg: "bg-yellow", fg: "text-ink", text: "text-ink", border: "border-yellow" },
};
