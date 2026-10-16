# validacion.md — Validación del MVP (grupo G01)

Relación entre requisitos (`spec.md`), comprobaciones realizadas, resultado y evidencia.

- Pruebas automáticas: `npm test` → **16 de 16 correctas** (salida completa en [`docs/resultado-pruebas.txt`](docs/resultado-pruebas.txt)). Código en `tests/store.test.js` y `tests/html.test.js`.
- Comprobación visual: capturas del MVP en `docs/capturas/app_*.png` (Edge, 1280 px y 500 px de ancho).
- Contraste calculado con la fórmula WCAG: [`docs/contraste.txt`](docs/contraste.txt).

## 1. Flujo principal
**Flujo:** inicio → elegir estado → contenido del día → continuar → registro completado.

| Requisito | Comprobación | Resultado | Evidencia |
|---|---|---|---|
| RF-01 saludo y tres opciones | Prueba `RF-01: existen las tres opciones de estado` + captura | ✅ Correcto | `tests/html.test.js`, `docs/capturas/app_d1.png`, `app_movil_inicio.png` |
| RF-02 registrar estado con fecha | Prueba `RF-02: registrar un estado válido…` y persistencia | ✅ Correcto | `tests/store.test.js` |
| RF-03 contenido del día | Revisión visual | ✅ Correcto | `docs/capturas/app_d2.png` |
| RF-04 / RF-06 confirmación y volver al inicio | Revisión visual de la confirmación; navegación revisada en el código | ✅ Pantalla correcta · ⚠️ clics no automatizados | `docs/capturas/app_d3.png`, `src/app.js` |
| RF-05 Atrás sin perder el estado | El estado se guarda antes de cambiar de pantalla (código) | ⚠️ Solo revisión de código | `src/app.js` |
| RF-07 "Necesito ayuda" en todas las pantallas | Prueba `RF-07` (botón en el banner, común a todas) | ✅ Correcto | `tests/html.test.js` |
| RF-08 diálogo de aviso | Prueba `RF-08` (`<dialog>` con Sí/No) | ✅ Estructura correcta | `tests/html.test.js` |
| RF-09 registrar aviso | Prueba `RF-09 / límite…` | ✅ Correcto | `tests/store.test.js` |
| RF-10 "No, estoy bien" cierra | Revisión de código (`dlg.close()`) | ⚠️ Solo revisión de código | `src/app.js` |
| RF-11 ofrecer aviso si "Mal" | Botón `#offer-help` visible solo con estado "mal" | ⚠️ Solo revisión de código | `src/app.js` |

## 2. Caso de error
**Escenario:** el navegador bloquea el almacenamiento (modo privado o permisos), o el valor de estado no es válido.

| Comprobación | Resultado esperado | Resultado | Evidencia |
|---|---|---|---|
| Almacenamiento bloqueado | La app sigue funcionando en memoria y muestra "No podemos guardar tus respuestas en este dispositivo…" (`role="alert"`) | ✅ Lógica probada (`disponible = false`) · aviso presente en el HTML | `Error / RNF-06…` y `Error: existe el mensaje…` |
| Sin almacenamiento (`null`) | No se produce excepción | ✅ Correcto | `Error: sin almacenamiento…` |
| Datos corruptos | Se ignoran y se empieza de cero | ✅ Correcto | `Error: datos corruptos…` |
| Estado inválido | Se rechaza, no se guarda | ✅ Correcto | `Error: un estado inválido…` |

## 3. Casos límite
| Caso (`spec.md` §7) | Resultado | Evidencia |
|---|---|---|
| Reabrir el mismo día: se muestra el último estado y se puede cambiar | ✅ Correcto | `Límite: volver a abrir el mismo día…` |
| El estado de ayer no cuenta como el de hoy | ✅ Correcto | `Límite: el estado de ayer…` |
| Aviso repetido en menos de 60 s no se duplica y se informa a la usuaria | ✅ Lógica probada · mensaje en `index.html` | `RF-09 / límite…` |
| Minimización: máximo 50 registros, solo nombre/estados/avisos | ✅ Correcto | `C-DAT-1…` |
| Texto largo no desborda el contenido | ⚠️ No validado con pruebas (el diseño usa tarjetas flexibles) | — |

## 4. Requisitos no funcionales
| Requisito | Comprobación | Resultado |
|---|---|---|
| RNF-01 botones ≥ 69 px | Variable CSS `--btn-h: 69px` y capturas | ✅ En el CSS (escritorio y móvil) |
| RNF-02 contraste ≥ 4,5:1 | Cálculo WCAG de las combinaciones usadas | ✅ Mínimo 4,83:1 (blanco sobre rojo) |
| RNF-02 tamaño base ≥ 18 px | `html { font-size: 20px }` (18 px en móvil) | ✅ |
| RNF-04 responsive 390/1280 px | Capturas a 1280 y 500 px | ✅ Sin scroll horizontal observado · ⚠️ 390 px exactos sin medir |
| RNF-06 datos mínimos | Prueba `C-DAT-1…` | ✅ |
| RNF-03 teclado | Elementos nativos `<button>` y `<dialog>`; foco visible en CSS | ⚠️ No probado manualmente |
| RNF-05 carga < 2 s | Sin dependencias ni red; no medido con Lighthouse | ⚠️ No medido |
| RNF-07 tarea en ≤ 3 toques | Estado → Continuar (2 toques hasta la confirmación) | ✅ Por diseño · ⚠️ sin prueba con otra persona |

## 5. Lo que no se ha podido validar
- **Interacciones en el navegador** (clics, diálogo, teclado): no hay pruebas end-to-end; solo lógica, estructura HTML y capturas.
- **Lighthouse** y lectores de pantalla: no ejecutados.
- **Prueba de usabilidad con otra persona** y la mejora asociada (T-11): pendiente del equipo.
- **Prototipo de Figma** (Navigate to, Overlay, variants): no verificable desde las herramientas usadas; enlace Present pendiente.
- **Envío real del aviso a la familia:** simulado; no hay backend (ver README).
