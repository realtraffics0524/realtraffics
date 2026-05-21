const TG_URL = 'https://t.me/TELEGRAM_ID';
document.querySelectorAll('[href="https://t.me/TELEGRAM_ID"]').forEach(a => { a.href = TG_URL; });

// AOS init
AOS.init({ duration: 700, once: true, offset: 60 });

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Language toggle
let lang = localStorage.getItem('lang') || 'ko';

function applyLang(l) {
  document.querySelectorAll('[data-ko]').forEach(el => {
    const val = l === 'ko' ? el.dataset.ko : el.dataset.en;
    if (val !== undefined) el.innerHTML = val;
  });
  document.getElementById('langCurrent').textContent = l === 'ko' ? 'KO' : 'EN';
  document.getElementById('langOther').textContent   = l === 'ko' ? 'EN' : 'KO';
  lang = l;
  localStorage.setItem('lang', l);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(lang === 'ko' ? 'en' : 'ko');
});

if (lang !== 'ko') applyLang(lang);

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu    = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Smooth scroll with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
