# Cada Día — MVP (grupo 2DAW-G01)

Proyecto intermodular DAM/DAW · Tema: la soledad de las personas mayores.

## Propósito y usuarios
Cada Día permite a una **persona mayor que vive sola** indicar con un toque cómo se encuentra, ver un contenido cercano del día y confirmar que su **familia ya lo sabe**. Un botón "Necesito ayuda" siempre visible permite avisar a la familia. Pensado para baja competencia digital: acceso directo, botones grandes, sin escribir nada.

## Funcionalidades del MVP
1. Registro del estado del día (Bien / Regular / Mal).
2. Contenido del día (mensaje de la familia y noticia local).
3. Confirmación de registro completado (con opción de avisar si el estado es "Mal").
4. Botón "Necesito ayuda" y aviso a la familia.

## Servicios simulados y limitaciones conocidas
- **El aviso a la familia está simulado:** solo se registra en el dispositivo (`localStorage`); no se envía ningún correo, SMS ni notificación.
- **El contenido del día es fijo** (mensaje de María y noticia local de ejemplo); no hay vista para el familiar ni contenido automático.
- No hay backend, usuarios ni autenticación. Los datos son **totalmente ficticios** (Carmen, María, Lucas).
- Fuera de alcance: recordatorio de medicación, favoritos, panel familiar, resumen del día.

## Tecnologías
HTML5, CSS3 y JavaScript sin dependencias. Pruebas con el ejecutor integrado de Node.js (`node:test`).

## Requisitos previos
- Un navegador actual (Chrome, Edge, Firefox).
- **Node.js 20 o superior** (solo para pruebas y servidor local). No hay dependencias que instalar (`npm install` no es necesario).

## Instalación y ejecución
```bash
git clone <URL-DEL-REPOSITORIO>
cd <carpeta-del-repositorio>
npm start            # abre http://localhost:8080
```
Alternativa sin Node: abrir `index.html` directamente en el navegador.

### Datos de ejemplo (ficticios)
No hay carga de datos: el usuario ficticio es **Carmen** y el contenido de María/Lucas está en `index.html`. Para empezar de cero, borrar los datos del sitio en el navegador (clave `cadadia.v2` de `localStorage`).

## Pruebas
```bash
npm test             # 16 pruebas automatizadas (lógica de datos y estructura de la página)
```
Resultados y evidencias en [`validacion.md`](validacion.md).

## Estructura
```
index.html, styles.css     interfaz
src/store.js               lógica de datos (testable)
src/app.js                 navegación y eventos
tests/                     pruebas y servidor local
docs/                      Design Thinking y Figma (con capturas)
constitution.md, AGENTS.md, spec.md, plan.md, tasks.md   documentos SDD
validacion.md, uso-ia.md, evidencias-ia/                  validación y registro de IA
```

## Documentación y prototipo
- Prototipo de Figma: https://www.figma.com/design/7cPAx6w7KLEbHJlr2u9lc2/0616_PR01-_Bienestar-360?node-id=0-1&t=QOI4fE2HYqKEubkk-1 (enlace Present: pendiente)
- [Design Thinking](docs/design-thinking.md) · [Figma y capturas](docs/figma.md)
- SDD: [constitution](constitution.md) · [AGENTS](AGENTS.md) · [spec](spec.md) · [plan](plan.md) · [tasks](tasks.md)
- [Validación](validacion.md) · [Uso de IA](uso-ia.md)

## Accesibilidad
Objetivos táctiles de 69 px, texto grande, alto contraste, foco visible, `<dialog>` modal nativo, avisos `aria-live`, respeta `prefers-reduced-motion`.

## Seguridad y datos
Sin credenciales ni datos personales en el repositorio. Los datos se guardan solo en el navegador del usuario.
