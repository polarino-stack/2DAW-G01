# uso-ia.md — Registro del uso de IA (grupo G01)

Herramienta común a todos los casos: **Claude Code** (CLI), modelo **Claude Sonnet 5.5** (`claude-sonnet-5-5`), modo **agente** (lee y escribe archivos y ejecuta comandos en la carpeta del proyecto, con permisos del usuario).

> **Pendiente del equipo:** añadir las capturas (`caso1.png`, `caso2.png`, `caso3.png`) en `evidencias-ia/` y completar los apartados marcados con _[equipo]_. Los fragmentos de respuesta están en [`evidencias-ia/fragmentos.md`](evidencias-ia/fragmentos.md).

## Caso 1 — Delimitar el MVP (fase SDD, documento `spec.md`)
- **Tarea y objetivo:** acotar el alcance a pocas funcionalidades esenciales.
- **Modo y motivo:** agente; necesitaba leer el enunciado y los documentos existentes.
- **Contexto y prompts:** enunciado de la entrega SDD y los documentos del proyecto. Prompts: _"dime si cuadra con lo que tenemos en esta carpeta"_ y _"rectifica los .md … para que quede como en los de la práctica"_.
- **Resultado y revisión humana:** la IA propuso dejar dentro estado emocional, contenido del día, aviso de ayuda y confirmación, y fuera medicación y favoritos. El equipo aceptó la propuesta (_"Perfecto"_) y la aplicó en `spec.md`. _[equipo: añadir el motivo propio de la decisión]_
- **Evidencia:** `evidencias-ia/caso1.png` _[equipo]_ y fragmento en `evidencias-ia/fragmentos.md`.

## Caso 2 — Desarrollo: adaptar el prototipo al MVP y hacerlo testable (`plan.md`, `tasks.md`)
- **Tarea y objetivo:** alinear el código con `spec.md` (quitar medicación y favoritos), añadir un caso de error y casos límite, y poder probar la lógica de forma automática.
- **Modo y motivo:** agente, por el volumen de cambios en varios archivos.
- **Contexto y prompts:** `spec.md`, `plan.md`, el enunciado de la entrega final y el código existente. Prompt: _"adapta este proyecto para que cumpla los puntos de este documento … hazlo tú para que no tenga que interactuar. Haz el máximo de pasos que no necesites autorización"_.
- **Resultado y revisión humana:** la IA separó la lógica en `src/store.js` (con almacenamiento y reloj inyectables), añadió el aviso de almacenamiento no disponible, el estado ya registrado, el aviso repetido y el botón de avisar cuando el estado es "Mal". Modificaciones/descartes de la IA durante el proceso: se descartó borrar los `.md` antiguos (el sistema de permisos lo denegó) y se movieron a una copia de respaldo; no se implementó contenido diario automático (fuera de alcance). _[equipo: indicar qué revisasteis y cambiasteis del código generado]_
- **Evidencia:** `evidencias-ia/caso2.png` _[equipo]_ y fragmento en `evidencias-ia/fragmentos.md`.

## Caso 3 — Validación: pruebas automáticas (`validacion.md`)
- **Tarea y objetivo:** crear pruebas de los requisitos, el caso de error y los casos límite.
- **Modo y motivo:** agente, para ejecutar `npm test` y corregir los fallos al momento.
- **Contexto y prompts:** `spec.md` (criterios de aceptación y casos límite) y el código de `src/`.
- **Resultado y revisión humana:** la IA generó 16 pruebas. La primera ejecución **falló** porque el script `node --test tests/` no funciona en Node 24 con una carpeta; se corrigió con un patrón de archivos y pasaron las 16. También detectó que las primeras capturas salían semitransparentes por una animación y se repitieron esperando a que terminara. La IA **no pudo** probar clics ni teclado reales en el navegador; eso se declaró como no validado en `validacion.md` en lugar de darlo por correcto. _[equipo: confirmar que habéis ejecutado `npm test` y revisado los casos]_
- **Evidencia:** `evidencias-ia/caso3.png` _[equipo]_ y fragmento en `evidencias-ia/fragmentos.md`.

## Reflexión final
La IA nos ayudó a convertir la especificación en un código pequeño y comprobable, y a detectar incoherencias entre el Figma, los documentos y el código (medicación, textos distintos en escritorio y móvil). Sus límites: no puede ver todas las páginas del Figma con las herramientas usadas, no prueba clics reales en el navegador y el prototipo inicial tenía más funcionalidades de las que cabían, por lo que redujimos el alcance a cuatro. Decidimos mantener el aviso a la familia como un servicio simulado y declararlo, en vez de aparentar un envío real. Cada integrante debe poder explicar el almacén de estado (`src/store.js`), el flujo de pantallas y por qué la medicación quedó fuera. _[equipo: ajustar esta reflexión con vuestras propias palabras]_
