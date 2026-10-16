# tasks.md — Tareas del MVP

Responsable de todas las tareas: G01-01. **Estado:** ✅ hecho · ⏳ pendiente.

| ID | Tarea | Requisito | Depende de | Responsable | Hecho cuando… | Estado |
|---|---|---|---|---|---|---|
| T-01 | Unificar textos del Figma (inicio y mensaje de María) y quitar la medicación del flujo | RF-01, RF-03 | — | G01-01 | Escritorio y móvil muestran los mismos textos y el flujo es 01→02→04. | ⏳ |
| T-02 | Revisar el prototipo web y retirar medicación y favoritos | RF-03 | T-01 | G01-01 | No existen pantallas ni botones de medicación o favoritos en la app. | ✅ |
| T-03 | Pantalla de inicio y registro de estado | RF-01, RF-02 | T-02 | G01-01 | Al pulsar un estado se guarda con fecha en `localStorage` y se pasa al contenido. | ✅ |
| T-04 | Pantalla de contenido del día con Atrás y Continuar | RF-03, RF-05 | T-03 | G01-01 | Se ven mensaje y noticia; Atrás vuelve sin perder el estado. | ✅ |
| T-05 | Pantalla de registro completado | RF-04, RF-06 | T-04 | G01-01 | Muestra la confirmación y "Volver al inicio" lleva al inicio. | ✅ |
| T-06 | Botón "Necesito ayuda" en todas las pantallas | RF-07 | T-03 | G01-01 | Visible y operable en todas las pantallas del flujo. | ✅ |
| T-07 | Diálogo de aviso a la familia y registro del aviso | RF-08, RF-09, RF-10 | T-06 | G01-01 | "Sí, avisar" guarda el aviso y confirma; "No, estoy bien" cierra sin cambios. | ✅ |
| T-08 | Adaptación móvil (390 px) y revisión responsive | RNF-04 | T-05, T-07 | G01-01 | Sin scroll horizontal y botones a ancho completo en móvil. | ✅ |
| T-09 | Accesibilidad: contraste, tamaños, teclado y foco | RNF-01 a RNF-03 | T-08 | G01-01 | Lighthouse sin errores de contraste y flujo completo con teclado. | ⏳ |
| T-10 | Casos límite (estado ya registrado, aviso repetido, sin `localStorage`) | Spec §7 | T-07 | G01-01 | Cada caso se comporta como describe `spec.md`. | ✅ |
| T-11 | Prueba de usabilidad con otra persona y mejora aplicada | RNF-07 | T-09 | G01-01 | 3 observaciones anotadas y 1 mejora aplicada y comprobada. | ⏳ |
| T-12 | Definir comando de pruebas y linter y actualizar `AGENTS.md` | — | T-10 | G01-01 | `AGENTS.md` ya no tiene comandos pendientes. | ✅ |
| T-13 | Resolver las dudas de `spec.md` y añadir el enlace del prototipo | — | T-11 | G01-01 | La sección "Dudas" está resuelta y el enlace figura en `spec.md`. | ⏳ |
| T-14 | Completar `uso-ia.md` y las capturas de `evidencias-ia/` | — | — | G01-01 | 2-3 casos documentados con captura y reflexión de 5-8 líneas. | ⏳ |
| T-15 | Preparar la entrega final: push, `entrega_G01.txt` y `Presentacion_G01.pdf` | — | T-13, T-14 | G01-01 | Repositorio privado con el commit final, SHA registrado y presentación en PDF. | ⏳ |

Notas: T-09 parcial (contraste/teclado diseñados, falta Lighthouse real). T-01 y T-11 requieren al equipo (Figma y persona de prueba). T-14 y T-15 dependen de las capturas y del repositorio privado.
