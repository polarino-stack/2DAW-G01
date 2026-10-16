# Prototipo de Figma — Cada Día (grupo G01)

- **Archivo de Figma:** https://www.figma.com/design/7cPAx6w7KLEbHJlr2u9lc2/0616_PR01-_Bienestar-360?node-id=0-1&t=QOI4fE2HYqKEubkk-1
- **Prototipo (Present):** pendiente de añadir por el equipo.
- **Páginas revisadas:** `00_Cover` y `07_ReadyForDev` (pantallas desktop 1280×800 y móvil 390×844, con anotaciones de función, interacción, componentes y responsive).

## Pantallas esenciales
| Pantalla | Captura Figma | Captura del MVP |
|---|---|---|
| 01 Inicio / estado | `capturas/figma_01_inicio.png` | `capturas/app_d1.png` |
| 02 Contenido del día | `capturas/figma_02_contenido.png` | `capturas/app_d2.png` |
| 04 Registro completado | `capturas/figma_04_completado.png` | `capturas/app_d3.png` |
| 06 Ayuda (overlay) | `capturas/figma_06_ayuda_overlay.png` | `<dialog>` de `index.html` |
| M1 Inicio (móvil) | `capturas/figma_M1_inicio_movil.png` | `capturas/app_movil_inicio.png` |

## Componentes del Figma reutilizados en el MVP
`Estado · Bien/Regular/Mal`, `Botón · Atrás/Continuar/Volver al inicio/Sí, avisar/No, estoy bien`, `Botón · Necesito ayuda` (banner), `Tarjeta contenido`, `Icono éxito`.

## Diferencias entre el Figma y el MVP entregado
| Figma | MVP | Motivo |
|---|---|---|
| Flujo 01→02→03 (medicación)→04 | Flujo 01→02→04 | La medicación queda fuera del alcance. |
| Botón "Guardar mensaje" | No existe | Fuera del alcance. |
| Textos distintos en escritorio y móvil (inicio, mensaje de María, medicación) | Se usa la versión de escritorio en ambos | Coherencia entre documentos y prototipo. |
| No hay pantalla móvil de "Aviso" | Pantalla "Aviso enviado" responsive | Cierra el flujo de ayuda. |
| No hay estado de error | Aviso de almacenamiento no disponible | Caso de error del MVP. |

## Incoherencias del Figma pendientes de corregir (T-01)
- Texto del inicio móvil ("antes de ver la foto, tu familia necesita saber…") distinto del de escritorio.
- Medicación distinta entre escritorio y móvil (se eliminó del MVP, pero sigue en el Figma).
- Anotaciones 05 y 06 genéricas ("Resumen del día" no existe).
- Los colores no usan variables de Figma; en el código son aproximados (`#2563EB`, etc.).
