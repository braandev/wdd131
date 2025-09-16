// Footer dinámico
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Panel desplegable superior
const btnHamb   = document.querySelector('.menu-hamburguesa');
const panel     = document.getElementById('menu-panel');
const closeBtn  = panel.querySelector('.panel-close');
const panelLinks= panel.querySelectorAll('a');

function openPanel(){
  panel.hidden = false;                 // vuelve clickeable
  requestAnimationFrame(() => panel.classList.add('open')); // anima
  btnHamb.setAttribute('aria-expanded','true');
}
function closePanel(){
  panel.classList.remove('open');
  btnHamb.setAttribute('aria-expanded','false');
  setTimeout(()=>{ panel.hidden = true; }, 280);            // espera transición
}

btnHamb.addEventListener('click', () => {
  panel.classList.contains('open') ? closePanel() : openPanel();
});
closeBtn.addEventListener('click', closePanel);
panelLinks.forEach(a => a.addEventListener('click', closePanel));

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
});
