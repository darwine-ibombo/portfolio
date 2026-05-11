/* CURSEUR */
var cursor     = document.getElementById('cursor');
var cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', function(e) {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cursor.style.width      = '6px';
    cursor.style.height     = '6px';
    cursorRing.style.width  = '50px';
    cursorRing.style.height = '50px';
  });
  el.addEventListener('mouseleave', function() {
    cursor.style.width      = '10px';
    cursor.style.height     = '10px';
    cursorRing.style.width  = '36px';
    cursorRing.style.height = '36px';
  });
});

/* HAMBURGER */
var ham  = document.getElementById('hamburger');
var menu = document.getElementById('mobile-menu');

function closeMobile() {
  ham.classList.remove('open');
  menu.classList.remove('open');
}

ham.addEventListener('click', function() {
  ham.classList.toggle('open');
  menu.classList.toggle('open');
});

document.addEventListener('click', function(e) {
  if (!ham.contains(e.target) && !menu.contains(e.target)) {
    closeMobile();
  }
});

/* TYPED EFFECT */
var phrases = [
  'Développeur Logiciel',
  'Administrateur Réseau',
  'Spécialiste Base de Données',
  'Passionné de technologie'
];

var phraseIndex = 0;
var charIndex   = 0;
var deleting    = false;
var typedEl     = document.getElementById('typed');

function typeLoop() {
  var currentPhrase = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = currentPhrase.slice(0, charIndex);
    if (charIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = currentPhrase.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, deleting ? 45 : 85);
}

typeLoop();

/* ANIMATIONS SCROLL */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.bar-fill').forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up, .timeline-item, .skill-card').forEach(function(el) {
  observer.observe(el);
});

/* FORMULAIRE */
function sendMsg() {
  alert('✅ Message envoyé ! Je vous répondrai très bientôt.');
}