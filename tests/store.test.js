const test = require('node:test');
const assert = require('node:assert');
const { createStore, STORE_KEY, AVISO_INTERVALO_MS } = require('../src/store.js');

// Almacenamiento falso en memoria (datos ficticios).
function fakeStorage(initial = {}) {
  const m = { ...initial };
  return {
    getItem: k => (k in m ? m[k] : null),
    setItem: (k, v) => { m[k] = String(v); },
    removeItem: k => { delete m[k]; },
    _m: m,
  };
}
const blockedStorage = () => ({
  getItem() { throw new Error('bloqueado'); },
  setItem() { throw new Error('bloqueado'); },
  removeItem() { throw new Error('bloqueado'); },
});
const at = (iso) => () => new Date(iso);

// --- Flujo principal (RF-01, RF-02) ---
test('RF-02: registrar un estado válido lo guarda con fecha y hora', () => {
  const st = fakeStorage();
  const s = createStore(st, at('2026-10-20T09:00:00Z'));
  assert.deepStrictEqual(s.setEstado('regular'), { ok: true });
  assert.strictEqual(s.estadoHoy(), 'regular');
  const guardado = JSON.parse(st._m[STORE_KEY]);
  assert.strictEqual(guardado.estados[0].valor, 'regular');
  assert.strictEqual(guardado.estados[0].fecha, '2026-10-20T09:00:00.000Z');
});

test('RF-02: los datos persisten al recrear el almacén', () => {
  const st = fakeStorage();
  createStore(st, at('2026-10-20T09:00:00Z')).setEstado('bien');
  const otro = createStore(st, at('2026-10-20T10:00:00Z'));
  assert.strictEqual(otro.estadoHoy(), 'bien');
});

// --- Caso de error ---
test('Error: un estado inválido se rechaza y no se guarda nada', () => {
  const s = createStore(fakeStorage(), at('2026-10-20T09:00:00Z'));
  assert.deepStrictEqual(s.setEstado('fatal'), { ok: false, motivo: 'invalido' });
  assert.strictEqual(s.estadoHoy(), null);
});

test('Error / RNF-06: con almacenamiento bloqueado la app sigue y avisa de que no guarda', () => {
  const s = createStore(blockedStorage(), at('2026-10-20T09:00:00Z'));
  assert.strictEqual(s.disponible, false);
  assert.deepStrictEqual(s.setEstado('mal'), { ok: true });
  assert.strictEqual(s.estadoHoy(), 'mal'); // sigue funcionando en memoria
});

test('Error: sin almacenamiento (null) tampoco falla', () => {
  const s = createStore(null, at('2026-10-20T09:00:00Z'));
  assert.strictEqual(s.disponible, false);
  assert.deepStrictEqual(s.registrarAviso(), { ok: true });
});

test('Error: datos corruptos en el almacenamiento se ignoran', () => {
  const s = createStore(fakeStorage({ [STORE_KEY]: '{no es json' }), at('2026-10-20T09:00:00Z'));
  assert.strictEqual(s.estadoHoy(), null);
  assert.deepStrictEqual(s.setEstado('bien'), { ok: true });
});

// --- Casos límite (spec §7) ---
test('Límite: volver a abrir el mismo día muestra el último estado y permite cambiarlo', () => {
  const st = fakeStorage();
  createStore(st, at('2026-10-20T09:00:00Z')).setEstado('bien');
  const s = createStore(st, at('2026-10-20T18:00:00Z'));
  assert.strictEqual(s.estadoHoy(), 'bien');
  s.setEstado('mal');
  assert.strictEqual(s.estadoHoy(), 'mal');
});

test('Límite: el estado de ayer no cuenta como el de hoy', () => {
  const st = fakeStorage();
  createStore(st, at('2026-10-19T09:00:00Z')).setEstado('bien');
  assert.strictEqual(createStore(st, at('2026-10-20T09:00:00Z')).estadoHoy(), null);
});

test('RF-09 / límite: un aviso repetido en menos de 60 s no se vuelve a registrar', () => {
  let t = new Date('2026-10-20T09:00:00Z').getTime();
  const s = createStore(fakeStorage(), () => new Date(t));
  assert.deepStrictEqual(s.registrarAviso(), { ok: true });
  t += 10 * 1000;
  assert.deepStrictEqual(s.registrarAviso(), { ok: false, motivo: 'repetido' });
  t += AVISO_INTERVALO_MS;
  assert.deepStrictEqual(s.registrarAviso(), { ok: true });
  assert.strictEqual(s.datos.avisos.length, 2);
});

test('C-DAT-1: solo se guardan nombre, estados y avisos, y con un máximo', () => {
  const s = createStore(fakeStorage(), at('2026-10-20T09:00:00Z'));
  for (let i = 0; i < 80; i++) s.setEstado('bien');
  assert.deepStrictEqual(Object.keys(s.datos).sort(), ['avisos', 'estados', 'usuario']);
  assert.strictEqual(s.datos.estados.length, 50);
});
