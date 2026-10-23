const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      alert('أضف رابط تيليجرام الحقيقي داخل ملف index.html قبل نشر الموقع.');
    }
  });
});
