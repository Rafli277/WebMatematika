/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: true,
});

// SCROLL HOME
sr.reveal('.home__title', {});

// Scroll About
sr.reveal('.container', {});

// Scroll Works
sr.reveal('.works__img', { interval: 200 });
sr.reveal('.works__img', { delay: 200 });

sr.reveal('.contact', {});
