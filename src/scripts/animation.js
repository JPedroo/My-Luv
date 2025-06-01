function animateClockElement(element, newValue) {
  const el = document.getElementById(element);
  el.style.transition = 'transform 0.5s ease-in-out';
  el.style.transform = 'scale(0.9)';
  
  setTimeout(() => {
    el.textContent = newValue;
    el.style.transform = 'scale(1)';
  }, 250);
}

function updateClockAnimation(hours, minutes, seconds) {
  animateClockElement('hours', hours);
  animateClockElement('minutes', minutes);
  animateClockElement('seconds', seconds);
}