import gsap from 'gsap';

const scalpingSection = document.querySelector('#scalping-section-with-glow');
const glowSm = scalpingSection.querySelector('.glow-sm');
const glowXl = scalpingSection.querySelector('.glow-xl');

function mouseMoveFunc(e) {
  const scalpingSectionRect = scalpingSection.getBoundingClientRect();
  const xlX = e.clientX - glowXl.clientWidth - scalpingSectionRect.left;
  const xlY = e.clientY - glowXl.clientHeight / 2 - scalpingSectionRect.top;
  const smX = e.clientX - scalpingSectionRect.left;
  const smY = e.clientY - glowSm.clientHeight / 2 - scalpingSectionRect.top;

  gsap.to('.glow-xl', {
    duration: 0.25,
    x: xlX,
    y: xlY,
    ease: 'slow',
    stagger: 0.1,
    overwrite: true,
    onStart: () => {
      glowXl.style.opacity = '1';
    },
    onComplete: () => {
      glowXl.style.opacity = '0';
    },
  });

  gsap.to('.glow-sm', {
    duration: 0.3,
    x: smX,
    y: smY,
    ease: 'slow',
    stagger: 0.1,
    overwrite: true,
    onStart: () => {
      glowSm.style.opacity = '1';
    },
    onComplete: () => {
      glowSm.style.opacity = '0';
    },
  });
}

if (scalpingSection) {
  scalpingSection.addEventListener('mousemove', (e) => {
    mouseMoveFunc(e);
  });
}
