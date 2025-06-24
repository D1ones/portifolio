const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  root.classList.add('dark');
} else {
  root.classList.remove('dark');
}

// Menu hambúrguer animado
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
  // Fecha menu ao clicar em link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

// Animação de foco nos campos do formulário
const formInputs = document.querySelectorAll('[data-anim-js]');
formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.classList.add('input-focus');
  });
  input.addEventListener('blur', () => {
    input.classList.remove('input-focus');
  });
});

// Envio do formulário para WhatsApp (mensagem simples)
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
  contatoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = encodeURIComponent('olá');
    window.open(`https://wa.me/5582981524582?text=${texto}`, '_blank');
  });
}

// Animação nos cards de projetos ao passar o mouse
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    card.style.transform = 'scale(1.04) translateY(-6px)';
    card.style.boxShadow = '0 12px 32px rgba(255,77,0,0.13)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
