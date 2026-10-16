# tasks.md — Tareas del MVP

Responsables: códigos G01-01 a G01-04 (por asignar). **Estado:** ✅ hecho · ⏳ pendiente.

| ID | Tarea | Requisito | Depende de | Responsable | Hecho cuando… | Estado |
|---|---|---|---|---|---|---|
| T-01 | Unificar textos del Figma (inicio y mensaje de María) y quitar la medicación del flujo | RF-01, RF-03 | — | Por asignar | Escritorio y móvil muestran los mismos textos y el flujo es 01→02→04. | ⏳ |
| T-02 | Revisar el prototipo web y retirar medicación y favoritos | RF-03 | T-01 | Por asignar | No existen pantallas ni botones de medicación o favoritos en la app. | ✅ |
| T-03 | Pantalla de inicio y registro de estado | RF-01, RF-02 | T-02 | Por asignar | Al pulsar un estado se guarda con fecha en `localStorage` y se pasa al contenido. | ✅ |
| T-04 | Pantalla de contenido del día con Atrás y Continuar | RF-03, RF-05 | T-03 | Por asignar | Se ven mensaje y noticia; Atrás vuelve sin perder el estado. | ✅ |
| T-05 | Pantalla de registro completado | RF-04, RF-06 | T-04 | Por asignar | Muestra la confirmación y "Volver al inicio" lleva al inicio. | ✅ |
| T-06 | Botón "Necesito ayuda" en todas las pantallas | RF-07 | T-03 | Por asignar | Visible y operable en todas las pantallas del flujo. | ✅ |
| T-07 | Diálogo de aviso a la familia y registro del aviso | RF-08, RF-09, RF-10 | T-06 | Por asignar | "Sí, avisar" guarda el aviso y confirma; "No, estoy bien" cierra sin cambios. | ✅ |
| T-08 | Adaptación móvil (390 px) y revisión responsive | RNF-04 | T-05, T-07 | Por asignar | Sin scroll horizontal y botones a ancho completo en móvil. | ✅ |
| T-09 | Accesibilidad: contraste, tamaños, teclado y foco | RNF-01 a RNF-03 | T-08 | Por asignar | Lighthouse sin errores de contraste y flujo completo con teclado. | ⏳ |
| T-10 | Casos límite (estado ya registrado, aviso repetido, sin `localStorage`) | Spec §7 | T-07 | Por asignar | Cada caso se comporta como describe `spec.md`. | ✅ |
| T-11 | Prueba de usabilidad con otra persona y mejora aplicada | RNF-07 | T-09 | Por asignar | 3 observaciones anotadas y 1 mejora aplicada y comprobada. | ⏳ |
| T-12 | Definir comando de pruebas y linter y actualizar `AGENTS.md` | — | T-10 | Por asignar | `AGENTS.md` ya no tiene comandos pendientes. | ✅ |
| T-13 | Resolver las dudas de `spec.md` y añadir el enlace del prototipo | — | T-11 | Por asignar | La sección "Dudas" está resuelta y el enlace figura en `spec.md`. | ⏳ |
| T-14 | Completar `uso-ia.md` y las capturas de `evidencias-ia/` | — | — | Por asignar | 2-3 casos documentados con captura y reflexión de 5-8 líneas. | ⏳ |
| T-15 | Preparar la entrega final: push, `entrega_G01.txt` y `Presentacion_G01.pdf` | — | T-13, T-14 | Por asignar | Repositorio privado con el commit final, SHA registrado y presentación en PDF. | ⏳ |

Notas: T-09 parcial (contraste/teclado diseñados, falta Lighthouse real). T-01 y T-11 requieren al equipo (Figma y persona de prueba). T-14 y T-15 dependen de las capturas y del repositorio privado.
