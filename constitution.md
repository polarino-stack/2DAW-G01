# Constitución del proyecto — Cada Día

Reglas que el equipo y cualquier asistente de IA deben cumplir en el MVP. Si una propuesta las incumple, se descarta o se consulta al equipo.

## 1. Accesibilidad (usuarios: personas mayores que viven solas)
- C-ACC-1. Cada acción principal se completa con **un toque/clic**; ningún paso exige escribir texto.
- C-ACC-2. Objetivos táctiles de **al menos 69 px de alto** (como en el Figma) y texto base **≥ 18 px**.
- C-ACC-3. Contraste de texto **≥ 4,5:1** (WCAG AA). El estado (Bien/Regular/Mal) no se comunica solo con color: lleva siempre texto.
- C-ACC-4. Todo es operable con teclado y con foco visible; los mensajes dinámicos usan `aria-live`.
- C-ACC-5. Se respeta `prefers-reduced-motion`. Sin temporizadores que expulsen al usuario de una pantalla.
- C-ACC-6. Lenguaje claro, frases cortas, sin tecnicismos. Tratamiento cercano ("tu familia ya lo sabe").
- C-ACC-7. "Necesito ayuda" está visible en todas las pantallas del flujo.

## 2. Protección de datos (RGPD)
- C-DAT-1. **Minimización:** solo se guarda lo necesario (nombre de pila, estado del día, fecha/hora, aviso de ayuda).
- C-DAT-2. Los datos de salud (estado emocional) se tratan como **datos sensibles**: no se registran en logs ni se envían a terceros.
- C-DAT-3. En el MVP los datos se quedan en el dispositivo (`localStorage`). Cualquier envío a un servidor requiere decisión del equipo y aviso informado al usuario.
- C-DAT-4. No se usan datos reales de personas en pruebas, capturas ni prompts a IA: solo datos ficticios (Carmen, María, Lucas).
- C-DAT-6. En archivos, nombres de repositorio y diapositivas solo se usa el código de grupo (G01) y códigos G01-NN; nunca nombres, correos, DNI ni fotos personales.
- C-DAT-5. Ninguna credencial o clave se sube al repositorio.

## 3. Calidad del código
- C-COD-1. HTML semántico, CSS con variables (tokens) y JS sin dependencias salvo justificación en `plan.md`.
- C-COD-2. Cada cambio responde a un requisito de `spec.md` (identificador RF-/RNF-) y a una tarea de `tasks.md`.
- C-COD-3. Nombres claros, funciones pequeñas, sin código muerto ni comentarios que repitan el código.
- C-COD-4. Antes de dar una tarea por hecha se ejecutan las comprobaciones de `AGENTS.md`.
- C-COD-5. Los textos de la interfaz coinciden con los del Figma; si hay conflicto manda `spec.md` y se corrige el Figma.

## 4. Revisión humana de la IA
- C-IA-1. La IA **propone, el equipo decide**. Nada generado por IA entra en el repositorio sin que al menos una persona lo haya leído y probado.
- C-IA-2. La IA no amplía el alcance del MVP: si sugiere una funcionalidad nueva, se anota en "Dudas" de `spec.md` y se decide en equipo.
- C-IA-3. Las decisiones relevantes basadas en IA se registran en `uso-ia.md` (propuesta, qué se aceptó/modificó/descartó y por qué).
- C-IA-4. Cada integrante debe saber explicar cualquier parte del código y de las decisiones.
