# spec.md — Especificación del MVP de Cada Día

## Equipo
**Grupo G01** — proyecto Cada Día. Aportaciones individuales: códigos G01-01 a G01-04 (según número de lista).

## Enlaces
- Figma: https://www.figma.com/design/7cPAx6w7KLEbHJlr2u9lc2/0616_PR01-_Bienestar-360?node-id=0-1&t=QOI4fE2HYqKEubkk-1
- Prototipo (Present): **pendiente** de añadir por el equipo.
- Capturas y diferencias con el MVP: `docs/figma.md`. Design Thinking: `docs/design-thinking.md`.

## 1. Problema y usuarios
Muchas personas mayores viven solas y sus familias no saben cómo están a lo largo del día, lo que genera soledad en unas y preocupación en otras.
- **Usuaria principal:** persona mayor que vive sola (personaje: Carmen). Poca soltura digital; accede desde un enlace personal, sin instalar nada.
- **Familiar:** hija/o u otro familiar (personaje: María) que quiere tranquilidad y enviar mensajes cercanos.

## 2. Objetivo del MVP
Que una persona mayor pueda indicar con un toque cómo se encuentra, ver un contenido cercano del día y confirmar que su familia ya lo sabe, además de poder pedir ayuda en cualquier momento.

**Tarea principal:** *Una persona mayor abre su enlace de Cada Día, indica cómo se encuentra, ve su contenido del día y recibe la confirmación de que su familia ya lo sabe.*

## 3. Alcance
**Incluido**
1. Registro del estado del día (Bien / Regular / Mal).
2. Contenido del día (mensaje de la familia + noticia local).
3. Confirmación de registro completado.
4. Botón "Necesito ayuda" y aviso a la familia.

**Excluido (por ahora)**
- Recordatorio y confirmación de medicación.
- Guardar mensajes como favoritos.
- Vista del familiar, "Resumen del día", autenticación, envío real de notificaciones y backend.

## 4. Requisitos funcionales (EARS)
| ID | Requisito |
|---|---|
| RF-01 | Cuando la usuaria abre su enlace, el sistema mostrará un saludo con su nombre y la pregunta "¿Cómo te encuentras hoy?" con tres opciones: Bien, Regular y Mal. |
| RF-02 | Cuando la usuaria pulsa una opción de estado, el sistema registrará el estado con fecha y hora y mostrará el contenido del día. |
| RF-03 | Mientras se muestra el contenido del día, el sistema presentará el mensaje de un familiar y una noticia local. |
| RF-04 | Cuando la usuaria pulsa "Continuar" en el contenido del día, el sistema mostrará la confirmación "Tu familia ya sabe que estás bien". |
| RF-05 | Cuando la usuaria pulsa "Atrás" en el contenido del día, el sistema volverá a la pantalla anterior sin perder el estado registrado. |
| RF-06 | Cuando la usuaria pulsa "Volver al inicio", el sistema mostrará la pantalla de inicio. |
| RF-07 | Mientras la usuaria esté en cualquier pantalla del flujo, el sistema mostrará el botón "Necesito ayuda". |
| RF-08 | Cuando la usuaria pulsa "Necesito ayuda", el sistema abrirá un aviso que pregunta "¿Quieres avisar a tu familia?" con "Sí, avisar" y "No, estoy bien". |
| RF-09 | Cuando la usuaria pulsa "Sí, avisar", el sistema registrará el aviso y mostrará una confirmación de que se ha avisado. |
| RF-10 | Cuando la usuaria pulsa "No, estoy bien", el sistema cerrará el aviso y la dejará en la pantalla en la que estaba. |
| RF-11 | Si el estado registrado es "Mal", el sistema ofrecerá avisar a la familia además de confirmar el registro. *(por validar, ver Dudas)* |

## 5. Requisitos no funcionales (verificables)
| ID | Requisito | Cómo se verifica |
|---|---|---|
| RNF-01 | Los botones principales medirán al menos 69 px de alto. | Inspección en el navegador. |
| RNF-02 | El texto tendrá contraste ≥ 4,5:1 y tamaño base ≥ 18 px. | Lighthouse / DevTools. |
| RNF-03 | El flujo completo se podrá recorrer solo con teclado. | Prueba manual con Tab/Enter. |
| RNF-04 | La interfaz se adaptará a 390 px (móvil) y 1280 px (escritorio) sin scroll horizontal. | Prueba manual en ambos anchos. |
| RNF-05 | Cada pantalla cargará en menos de 2 s en una conexión normal. | Lighthouse. |
| RNF-06 | Los datos se guardarán solo en el dispositivo y no incluirán más que nombre, estado, fecha/hora y avisos. | Revisión de `localStorage`. |
| RNF-07 | Se podrá completar la tarea principal en 3 toques o menos. | Prueba con otra persona. |

## 6. Criterios de aceptación
- **RF-02:** Estando en el inicio, al pulsar "Regular" se guarda `Regular` con la hora y aparece el contenido del día.
- **RF-04/06:** Al pulsar "Continuar" aparece la confirmación; al pulsar "Volver al inicio" reaparecen las tres opciones.
- **RF-08/09:** Desde cualquier pantalla, "Necesito ayuda" abre el aviso; "Sí, avisar" guarda el aviso y muestra "Aviso enviado".
- **RF-10:** "No, estoy bien" cierra el aviso y la pantalla anterior queda intacta.
- **RNF-03:** Sin ratón se puede llegar de inicio a confirmación y abrir/cerrar el aviso de ayuda.

## 7. Casos límite
- La usuaria ya registró su estado hoy y vuelve a abrir el enlace: se muestra el estado ya registrado (ver Dudas sobre si puede cambiarlo).
- Pulsa "Necesito ayuda" varias veces seguidas: solo se registra un aviso en un intervalo corto.
- `localStorage` no disponible o bloqueado: la app sigue funcionando sin persistir y lo indica con un mensaje claro.
- Texto largo del mensaje familiar o de la noticia: el contenido no se desborda ni tapa los botones.
- Cierra el navegador a mitad del flujo: al volver empieza en el inicio sin perder el estado ya guardado.
- Sin conexión: el MVP funciona igual (no depende de servidor).

## 8. Decisiones sobre las dudas iniciales (versión del MVP entregado)
1. **¿Se puede cambiar el estado del día?** Sí. Se registra un nuevo estado y cuenta el último del día. Al reabrir se muestra el estado ya indicado (implementado y probado).
2. **¿Qué ocurre con "Mal"?** La confirmación ofrece el botón "Avisar a mi familia" (RF-11, implementado).
3. **¿Cómo recibe el aviso la familia?** Simulado: solo se registra en el dispositivo. Queda como limitación conocida.
4. **Textos escritorio/móvil del Figma:** se usa la versión de escritorio en ambos.
5. **Medicación:** eliminada del MVP (alcance reducido).
6. **Enlace al prototipo (Present):** pendiente de añadir por el equipo.

## 9. Cambios respecto a la entrega SDD anterior
- Se añadieron el caso de error (almacenamiento no disponible) y los casos límite al código y a las pruebas.
- Se retiraron del código la medicación y los favoritos para alinear MVP, especificación y plan.
- Se anonimizaron los documentos (solo código de grupo).
- Las dudas 1 y 2 se resolvieron e implementaron.
