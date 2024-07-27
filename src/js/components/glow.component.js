import gsap, { Linear } from 'gsap';

const scalpingSection = document.querySelector('#scalping-section-with-glow');
// const glowSm = scalpingSection.querySelector('.glow-sm');
// const glowXl = scalpingSection.querySelector('.glow-xl');

// function mouseMoveFunc(e) {
//   const scalpingSectionRect = scalpingSection.getBoundingClientRect();
//   const xlX = e.clientX - glowXl.clientWidth - scalpingSectionRect.left;
//   const xlY = e.clientY - glowXl.clientHeight / 2 - scalpingSectionRect.top;
//   const smX = e.clientX - scalpingSectionRect.left;
//   const smY = e.clientY - glowSm.clientHeight / 2 - scalpingSectionRect.top;

//   gsap.to('.glow-xl', {
//     duration: 0.25,
//     x: xlX,
//     y: xlY,
//     ease: 'slow',
//     stagger: 0.1,
//     overwrite: true,
//     onStart: () => {
//       glowXl.style.opacity = '1';
//     },
//     onComplete: () => {
//       glowXl.style.opacity = '0';
//     },
//   });

//   gsap.to('.glow-sm', {
//     duration: 0.3,
//     x: smX,
//     y: smY,
//     ease: 'slow',
//     stagger: 0.1,
//     overwrite: true,
//     onStart: () => {
//       glowSm.style.opacity = '1';
//     },
//     onComplete: () => {
//       glowSm.style.opacity = '0';
//     },
//   });
// }

// if (scalpingSection) {
//   scalpingSection.addEventListener('mousemove', (e) => {
//     mouseMoveFunc(e);
//   });
// }
const scalpingSectionRect = scalpingSection.getBoundingClientRect();

let svgns = 'http://www.w3.org/2000/svg';
let root = document.querySelector('.glow-svg');
let ease = 0.75;

let pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

window.addEventListener('mousemove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

let leader = (prop) => {
  return prop === 'x' ? pointer.x : pointer.y;
};

let total = 100;
for (let i = 0; i < total; i++) {
  leader = createLine(leader, i);
}

function createLine(leader, i) {
  let line = document.createElementNS(svgns, 'line');
  root.appendChild(line);

  gsap.set(line, { x: -15, y: -15, opacity: (total - i) / total });

  let pos = gsap.getProperty(line);

  gsap.to(line, {
    duration: 999,
    x: '+=1',
    y: '+=1',
    repeat: -1,
    ease: 'none',
    modifiers: {
      x: () => {
        let posX = pos('x');
        let leaderX = leader('x');
        let x = posX + (leaderX - posX) * ease;
        line.setAttribute('x2', leaderX - x);
        return x;
      },
      y: () => {
        let posY = pos('y');
        let leaderY = leader('y');
        let y = posY + (leaderY - posY) * ease;
        line.setAttribute('y2', leaderY - y);
        return y;
      },
    },
  });

  return pos;
}
