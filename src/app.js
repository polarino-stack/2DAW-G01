(() => {
  'use strict';

  const SCREENS = ['inicio', 'contenido', 'completado', 'avisado'];

  const FAMILY_MSG = {
    bien: 'Tu familia ya sabe que estás bien.',
    regular: 'Tu familia ya sabe que estás regular.',
    mal: 'Tu familia ya sabe que no estás bien.',
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  let storage = null;
  try { storage = window.localStorage; } catch { /* acceso bloqueado */ }
  const store = window.CadaDiaStore.createStore(storage);

  let estadoActual = store.estadoHoy();

  function greeting() {
    const h = new Date().getHours();
    return h < 13 ? 'Buenos días' : h < 21 ? 'Buenas tardes' : 'Buenas noches';
  }

  function announce(msg) { $('#live').textContent = msg; }

  function renderStorageWarning() {
    $('#storage-warning').hidden = store.disponible;
  }

  function renderPrevio() {
    const el = $('#previo');
    if (estadoActual) {
      el.textContent = `Hoy ya nos dijiste que estabas ${estadoActual}. Puedes cambiarlo si quieres.`;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  }

  function show(name, { focus = true } = {}) {
    if (!SCREENS.includes(name)) name = 'inicio';
    $$('.screen').forEach(s => { s.hidden = s.dataset.screen !== name; });
    if (location.hash !== '#' + name) history.pushState(null, '', '#' + name);
    if (name === 'inicio') renderPrevio();
    if (name === 'completado') {
      const estado = estadoActual || 'bien';
      $('[data-family-msg]').textContent = FAMILY_MSG[estado];
      $('#offer-help').hidden = estado !== 'mal'; // RF-11
    }
    window.scrollTo(0, 0);
    if (focus) $('#main').focus({ preventScroll: true });
  }

  // --- Eventos ---
  $$('[data-state]').forEach(btn => btn.addEventListener('click', () => {
    const res = store.setEstado(btn.dataset.state);
    if (!res.ok) return;
    estadoActual = btn.dataset.state;
    renderStorageWarning();
    show('contenido');
  }));

  $$('[data-go]').forEach(btn => btn.addEventListener('click', () => show(btn.dataset.go)));

  // Ayuda: <dialog> modal (Esc cierra, foco atrapado de forma nativa)
  const dlg = $('#help-dialog');
  const openHelp = () => dlg.showModal();
  $('#open-help').addEventListener('click', openHelp);
  $('#offer-help').addEventListener('click', openHelp);
  $('#help-no').addEventListener('click', () => dlg.close());
  $('#help-yes').addEventListener('click', () => {
    const res = store.registrarAviso();
    renderStorageWarning();
    dlg.close();
    $('#aviso-repetido').hidden = res.ok; // caso límite: aviso ya enviado hace un momento
    show('avisado');
    announce(res.ok ? 'Aviso enviado a tu familia' : 'Tu familia ya ha recibido un aviso hace un momento');
  });
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  // Navegación con botón atrás del navegador
  window.addEventListener('popstate', () => show(location.hash.slice(1), { focus: false }));

  // --- Inicio ---
  $('[data-greeting]').textContent = greeting();
  renderStorageWarning();
  show(SCREENS.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'inicio', { focus: false });
})();
