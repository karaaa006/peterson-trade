import gsap from 'gsap';

const scalpingSection = document.querySelector('#scalping');

if (scalpingSection) {
  let svgns = 'http://www.w3.org/2000/svg';
  let root = document.querySelector('.glow-svg');
  let ease = 0.75;

  let pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  const handleMouseMove = (event) => {
    const scalpingSectionRect = scalpingSection.getBoundingClientRect();

    if (event.clientY - scalpingSectionRect.top <= 300) {
      gsap.to('line', { opacity: 0, y: 300 });
    } else if (
      scalpingSectionRect.top + scalpingSectionRect.height - event.clientY <=
      300
    ) {
      gsap.to('line', {
        opacity: 0,
        y: scalpingSectionRect.height - 300,
      });
    } else {
      gsap.to('line', { opacity: 1 });
    }
    pointer.x = event.clientX - scalpingSectionRect.left;
    pointer.y = event.clientY - scalpingSectionRect.top;
  };

  scalpingSection.addEventListener('mousemove', handleMouseMove);

  let leader = (prop) => {
    return prop === 'x' ? pointer.x : pointer.y;
  };

  const createLine = (leader, i) => {
    let line = document.createElementNS(svgns, 'line');
    root.appendChild(line);

    gsap.set(line, { x: -15, y: -15, opacity: (total - i) / total });

    let pos = gsap.getProperty(line);

    gsap.to(line, {
      duration: 0.1,
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
  };

  let total = 150;
  for (let i = 0; i < total; i++) {
    leader = createLine(leader, i);
  }
}
