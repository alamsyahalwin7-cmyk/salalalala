// SLIDER
const track = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const navLinks = document.querySelectorAll('a[data-slide]');
const ctaBtn = document.querySelector('.cta-button');

let currentIndex = 0;

// helper index
function clampIndex(i){
  if(i < 0) return slideItems.length - 1;
  if(i >= slideItems.length) return 0;
  return i;
}

function goTo(index){
  currentIndex = clampIndex(index);
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// tombol panah
prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

// menu klik -> ke slide terkait
navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target = parseInt(link.dataset.slide);
    goTo(target);
  });
});

// CTA Produk -> ke slide produk
if(ctaBtn){
  ctaBtn.addEventListener('click', e=>{
    e.preventDefault();
    const target = parseInt(ctaBtn.dataset.slide);
    goTo(target);
  });
}

// opsional: keyboard
window.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowLeft') goTo(currentIndex - 1);
  if(e.key === 'ArrowRight') goTo(currentIndex + 1);
});


// LOGIN MODAL
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

// pastikan modal disembunyikan dulu
if (loginModal) loginModal.style.display = 'none';

if (loginBtn && loginModal) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex'; // baru muncul
  });

  closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });
}
