# Fragmentos de respuestas de la IA (evidencias)

> Complementan las capturas de pantalla que debe añadir el equipo en esta carpeta (`caso1.png`, `caso2.png`, `caso3.png`). No contienen datos personales.

## Caso 1 — Propuesta de MVP (fase SDD)
Propuesta de la IA: *"Mi propuesta es estado emocional, contenido del día, aviso de ayuda a la familia y confirmación. El recordatorio de medicación y 'Guardar mensaje' quedarían fuera."*

## Caso 2 — Desarrollo: separar la lógica para poder probarla
Plan de la IA: crear `src/store.js` con `createStore(storage, now)` que recibe el almacenamiento y el reloj como parámetros, para probar sin navegador; añadir un aviso `role="alert"` si el almacenamiento está bloqueado; retirar medicación y favoritos.

## Caso 3 — Validación: fallo de la primera ejecución de pruebas
Salida real del primer intento (`node --test tests/`):

```
Error: Cannot find module 'C:\CadaDia\tests'
✖ tests (79.188ms)
ℹ tests 1 / pass 0 / fail 1
```
Corrección (script `test` con patrón de archivos) y salida final:

```
ℹ tests 16
ℹ pass 16
ℹ fail 0
```
