# Design Thinking — Cada Día (grupo G01)

Resumen del material de ideación y de la actividad de Design Thinking del grupo.

## Problema
Muchas personas mayores que viven solas no quieren perder su independencia, pero sus familias viven con la preocupación constante de no saber cómo están cada día. Las alternativas actuales fallan por dos motivos:
- **Tecnología intrusiva** (cámaras, sensores) que solo actúa cuando ya ha ocurrido una emergencia.
- **Soluciones pasivas o frías** (una llamada diaria difícil de mantener) que no dan a la persona mayor un motivo estimulante para comunicarse.

## Usuarios
- **Persona mayor** (personaje ficticio: Carmen). Baja competencia digital, posibles limitaciones de visión y motricidad. Accede con un enlace directo, sin contraseñas ni aplicaciones.
- **Familiar** (personaje ficticio: María). Quiere tranquilidad y mantener el contacto.

## Fase 1 — Empatía: 5 "¿Por qué?"
Problema inicial: la persona mayor ha dejado de pulsar el botón de registro de estado por la mañana durante varios días.

1. ¿Por qué deja de pulsarlo? Porque olvida acceder al enlace al despertarse.
2. ¿Por qué lo olvida? Porque no le aporta valor inmediato; lo vive como un control forzado.
3. ¿Por qué lo siente como control? Porque el contenido afectivo (fotos, mensajes) no siempre cambia o tarda en actualizarse.
4. ¿Por qué tarda? Porque los familiares no tienen tiempo de subir contenido nuevo cada día.
5. ¿Por qué depende solo de la familia? Porque el sistema no ofrece por sí solo contenido cultural, local o de entretenimiento.

**Causa raíz:** falta de automatización y dinamismo en los estímulos diarios.

**Acciones propuestas:** incentivo automático diario (propuesta cultural local si no hay mensajes de la familia), recordatorio accesible por la mañana y plantillas rápidas para la familia.

## Fase 2 — Definición y propuesta de valor
**Cada Día** es una solución digital ultrasencilla que convierte la comprobación diaria del estado de la persona mayor en una rutina de acompañamiento, sin cámaras ni sensores. Con un toque (Bien / Regular / Mal) la persona mayor da señal de vida y recibe a cambio contenido útil y afectivo; hay un botón de ayuda siempre visible que avisa a la familia.

Visión completa de la idea: vista de la persona mayor + panel de la familia (semáforo de estado, mensajes, recordatorios, alertas escaladas, historial).

## Fases 3 y 4 — Ideación y prototipado
Diagrama de prioridades y mock-up web, que dieron lugar al prototipo de Figma (ver `docs/figma.md`).

## Accesibilidad como guía de diseño (WCAG 2.1 AA)
Texto grande y alto contraste; botones grandes y un solo toque; acceso por enlace sin login; navegación limpia.

## Del Design Thinking al MVP: decisiones de alcance
| Idea de Design Thinking | ¿En el MVP? | Motivo |
|---|---|---|
| Registro de estado en un toque | **Sí** | Núcleo de la solución. |
| Contenido diario (mensaje familiar + noticia local) | **Sí** (contenido fijo de ejemplo) | Da valor inmediato a la persona mayor. La generación automática queda como mejora. |
| Botón de ayuda y aviso a la familia | **Sí** (aviso simulado) | Seguridad; no requiere backend para demostrarlo. |
| Recordatorio de medicación | No | Reduce alcance; se recomendó un MVP pequeño y bien resuelto. |
| Guardar mensajes como favoritos | No | No es necesario para la tarea principal. |
| Panel / vista de la familia, alertas escaladas, historial | No | Requiere backend y notificaciones reales. |
| Contenido cultural automático (API) | No | Dependencia externa; limitación conocida. |
