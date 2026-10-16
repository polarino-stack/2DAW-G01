const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

test('RF-01: existen las tres opciones de estado', () => {
  for (const e of ['bien', 'regular', 'mal']) assert.match(html, new RegExp(`data-state="${e}"`));
});

test('RF-07: el botón "Necesito ayuda" está en el banner', () => {
  assert.match(html, /id="open-help"[^>]*>Necesito ayuda/);
});

test('RF-08: el aviso de ayuda es un <dialog> con Sí y No', () => {
  assert.match(html, /<dialog id="help-dialog"/);
  assert.match(html, /Sí, avisar/);
  assert.match(html, /No, estoy bien/);
});

test('Flujo del MVP: inicio, contenido, completado y avisado (sin medicación ni favoritos)', () => {
  for (const s of ['inicio', 'contenido', 'completado', 'avisado']) {
    assert.match(html, new RegExp(`data-screen="${s}"`));
  }
  assert.doesNotMatch(html, /medicaci/i);
  assert.doesNotMatch(html, /Guardar mensaje/);
});

test('Error: existe el mensaje de almacenamiento no disponible con role="alert"', () => {
  assert.match(html, /id="storage-warning"[^>]*role="alert"/);
});

test('RNF-04: la página es responsive (viewport)', () => {
  assert.match(html, /name="viewport"/);
});
