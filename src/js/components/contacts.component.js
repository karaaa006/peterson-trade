import gsap from 'gsap';

const contactForm = document.querySelector('.contact-form');

let b1 =
  'linear-gradient(216deg, #ffffff 25.97%, rgba(255, 255, 255, 0) 36.63%, rgba(255, 255, 255, 0) 67.82%, #ffffff 78.13%)';
let b2 =
  'linear-gradient(144deg, #ffffff 25.97%, rgba(255, 255, 255, 0) 36.63%, rgba(255, 255, 255, 0) 67.82%, #ffffff 78.13%)';

if (contactForm) {
  gsap
    .timeline({ repeat: -1, yoyo: 'true', repeatDelay: 3 })
    .add(gsap.set(contactForm, { background: b1 }))
    .add(gsap.to(contactForm, { ease: 'none', duration: 6, background: b2 }))
    .play(0);
}
