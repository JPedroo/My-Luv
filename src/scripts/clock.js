function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;

  animateChange('hours', h);
  animateChange('minutes', m);
  animateChange('seconds', s);
}

let last = { hours: '', minutes: '', seconds: '' };

function animateChange(id, newVal) {
  if (last[id] !== newVal) {
    const el = document.getElementById(id);
    el.style.transform = 'scale(0.95)';
    setTimeout(() => {
      el.style.transform = 'scale(1)';
    }, 150);
    last[id] = newVal;
  }
}

setInterval(updateClock, 1000);
updateClock();