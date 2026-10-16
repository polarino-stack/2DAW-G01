// Almacén de estado de Cada Día (sin dependencias).
// Funciona en el navegador (window.CadaDiaStore) y en Node (require) para las pruebas.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CadaDiaStore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORE_KEY = 'cadadia.v2';
  const ESTADOS = ['bien', 'regular', 'mal'];
  const AVISO_INTERVALO_MS = 60 * 1000; // evita avisos repetidos seguidos (spec §7)
  const MAX_REGISTROS = 50;             // minimización de datos (C-DAT-1)

  const vacio = () => ({ usuario: 'Carmen', estados: [], avisos: [] });
  const dia = (iso) => iso.slice(0, 10);

  // storage: objeto con getItem/setItem (localStorage) o null. now: función que devuelve Date.
  function createStore(storage, now = () => new Date()) {
    let data = vacio();
    // Comprueba que el almacenamiento existe y permite escribir (puede estar bloqueado).
    let disponible = !!storage && probar(storage);

    if (disponible) {
      try {
        const parsed = JSON.parse(storage.getItem(STORE_KEY));
        if (parsed && Array.isArray(parsed.estados) && Array.isArray(parsed.avisos)) {
          data = { usuario: 'Carmen', estados: parsed.estados, avisos: parsed.avisos };
        }
      } catch {
        data = vacio(); // datos corruptos: se empieza de cero
      }
    }

    function probar(s) {
      try { s.setItem('__test', '1'); s.removeItem('__test'); return true; } catch { return false; }
    }

    function guardar() {
      if (!storage) { disponible = false; return; }
      try {
        storage.setItem(STORE_KEY, JSON.stringify(data));
      } catch {
        disponible = false;
      }
    }

    function estadoHoy() {
      const hoy = dia(now().toISOString());
      for (let i = data.estados.length - 1; i >= 0; i--) {
        if (dia(data.estados[i].fecha) === hoy) return data.estados[i].valor;
      }
      return null;
    }

    // RF-02: registra el estado con fecha y hora.
    function setEstado(valor) {
      if (!ESTADOS.includes(valor)) return { ok: false, motivo: 'invalido' };
      data.estados.push({ valor, fecha: now().toISOString() });
      data.estados = data.estados.slice(-MAX_REGISTROS);
      guardar();
      return { ok: true };
    }

    // RF-09: registra el aviso a la familia; ignora repeticiones muy seguidas.
    function registrarAviso() {
      const t = now().getTime();
      const ultimo = data.avisos[data.avisos.length - 1];
      if (ultimo && t - new Date(ultimo.fecha).getTime() < AVISO_INTERVALO_MS) {
        return { ok: false, motivo: 'repetido' };
      }
      data.avisos.push({ fecha: now().toISOString() });
      data.avisos = data.avisos.slice(-MAX_REGISTROS);
      guardar();
      return { ok: true };
    }

    return {
      setEstado,
      registrarAviso,
      estadoHoy,
      get disponible() { return disponible; },
      get datos() { return JSON.parse(JSON.stringify(data)); },
    };
  }

  return { createStore, ESTADOS, STORE_KEY, AVISO_INTERVALO_MS };
});
