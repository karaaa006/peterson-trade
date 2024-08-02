import './utils/vh.utils.js';

import './libs/countUp.lib.js';

import './components/uploadFile.component.js';
import './components/inputs.component.js';
import './components/achievements.component.js';
import './components/glow.component.js';
import './components/sliders.component.js';
import './components/popups.component.js';
import './components/header.component.js';
import './components/contacts.component.js';
import './components/hero.component.js';

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const submitBtn = contactForm.querySelector('#submit-contact-us');
  const nameInput = contactForm.querySelector('#name');
  const phoneInput = contactForm.querySelector('#phone');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const phone = phoneInput.value;
    console.log(name, phone);
  });
}
