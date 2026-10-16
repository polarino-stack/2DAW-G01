# AGENTS.md — Instrucciones para el asistente de IA

## Contexto
**Cada Día** ayuda a personas mayores que viven solas a indicar con un toque cómo están y avisa a su familia. Proyecto intermodular DAM/DAW de Monlau (tema: soledad de las personas mayores). Grupo: G01 (no incluir nombres ni datos personales en ningún archivo; usar códigos G01-NN).

## Documentos que debes leer antes de actuar (en este orden)
1. `constitution.md` — reglas obligatorias.
2. `spec.md` — qué hay que construir (requisitos RF-/RNF-).
3. `plan.md` — cómo se construye.
4. `tasks.md` — qué tarea toca; trabaja **solo en una tarea cada vez**.
5. `docs/figma.md` y `docs/design-thinking.md` — referencia del Figma y de la ideación.

## Tecnologías y convenciones
- HTML + CSS + JavaScript puro, sin build ni dependencias (`index.html`, `styles.css`, `src/store.js`, `src/app.js`).
- Estado del día en `localStorage`. Sin backend en el MVP.
- Idioma de interfaz y de documentación: **español**.
- Responsive con punto de corte en 768 px. Estilos con variables CSS.
- Mensajes de commit: `<ID-tarea>: descripción breve` (ej. `T-04: pantalla de contenido`).

## Comprobaciones antes de dar algo por hecho
- Abrir `index.html` en el navegador y recorrer el flujo completo en escritorio y en móvil (390 px).
- Verificar teclado (Tab/Enter) y contraste.
- Comprobar los criterios de aceptación del requisito en `spec.md`.
- Pruebas automáticas: `npm test` (deben pasar todas).
- Servidor local: `npm start` (http://localhost:8080).
- Linter / formateador: **pendiente** (no se usa en el MVP).

## Cómo actuar ante dudas
- Si falta información o dos documentos se contradicen, **pregunta al equipo**; no inventes.
- No añadas funcionalidades fuera del MVP (ver "Excluido" en `spec.md`); anótalas como propuesta.
- No uses datos personales reales ni subas credenciales.
- Resume al final qué has cambiado y qué queda sin verificar.
