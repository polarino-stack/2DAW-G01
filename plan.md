# plan.md — Plan técnico del MVP

## 1. Tecnologías y justificación
| Tecnología | Motivo |
|---|---|
| HTML5 semántico | Accesibilidad nativa (botones, `<dialog>`, encabezados). |
| CSS con variables y media query a 768 px | Un único código responsive; tokens fáciles de ajustar al Figma. |
| JavaScript sin framework | La app tiene pocas pantallas; evita dependencias y build, viable en el tiempo disponible. |
| `localStorage` | Persistencia en el dispositivo sin backend, coherente con C-DAT-3. |
| Git/GitHub | Control de versiones y entrega final. |

Backend real y notificaciones quedan **fuera** del MVP (riesgo de tiempo y de protección de datos).

## 2. Componentes principales
- **Navegación de pantallas** (`src/app.js`): muestra una pantalla cada vez (inicio, contenido, completado, aviso enviado).
- **Selector de estado**: tres tarjetas Bien/Regular/Mal (componente con variantes de color).
- **Tarjeta de contenido**: mensaje familiar + noticia local.
- **Banner**: marca "CADA DIA" y botón "Necesito ayuda" (siempre visible).
- **Diálogo de ayuda**: `<dialog>` modal con "Sí, avisar" / "No, estoy bien".
- **Almacén de estado** (`src/store.js`): lógica pura y probada que lee/escribe en `localStorage` y tolera que no esté disponible.

## 3. Datos y almacenamiento
Una clave (`cadadia.v2`) en `localStorage`, formato JSON:
```json
{
  "usuario": "Carmen",
  "estados": [{ "valor": "Bien|Regular|Mal", "fecha": "ISO-8601" }],
  "avisos":  [{ "fecha": "ISO-8601" }]
}
```
Solo nombre, estados y avisos (minimización, RNF-06). Sin identificadores personales reales.

## 4. Relación con las pantallas de Figma
| Pantalla Figma (`07_ReadyForDev`) | Requisitos | Componente |
|---|---|---|
| 01 Inicio / Estado (desktop `234:50`, móvil `234:124`) | RF-01, RF-02 | Selector de estado |
| 02 Contenido del día (`234:62` / `234:136`) | RF-03, RF-04, RF-05 | Tarjeta de contenido |
| 04 Registro completado (`234:95` / `234:167`) | RF-04, RF-06 | Icono éxito + botón |
| 05/06 Aviso y overlay de ayuda (`234:107`, `234:118` / `234:179`) | RF-07 a RF-10 | Diálogo de ayuda |
| 03 Recordatorio de medicación (`234:79` / `234:152`) | — | **Fuera del MVP** (sigue en el Figma) |

## 5. Estrategia de pruebas
- **Manual guiada:** recorrido completo en 1280 px y 390 px siguiendo los criterios de aceptación de `spec.md`.
- **Accesibilidad:** Lighthouse (contraste, nombres accesibles) y prueba solo con teclado.
- **Usabilidad:** una persona ajena al equipo realiza la tarea principal sin ayuda; se anotan 3 observaciones.
- **Automática:** `npm test` (Node `node:test`, sin dependencias): 16 pruebas del almacén de estado y de la estructura de la página. Resultados en `validacion.md`.

## 6. Viabilidad y riesgos
- Se reutiliza el prototipo web existente (`index.html`, `src/app.js`, `styles.css`) ajustándolo al MVP: menos riesgo de tiempo.
- Riesgo: incoherencias del Figma → se resuelven en T-01.
- Riesgo: alcance creciente → se aplica la lista de "Excluido" de `spec.md`.

## 7. Revisión del equipo
Estado: **implementado en el MVP entregado**. Revisión del equipo: pendiente de confirmar por los cuatro integrantes (G01-01 a G01-04).

## 8. Cambios respecto a la versión anterior
- Se separó la lógica en `src/store.js` para poder probarla de forma automática.
- Se añadió la clave `cadadia.v2` (antes `v1`, con medicación y favoritos).
- Se añadió `npm start` (servidor estático local) y `npm test`.
