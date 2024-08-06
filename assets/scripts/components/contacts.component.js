import gsap from 'gsap';
import { kommoAxios } from '../libs/axios.lib';

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

  const submitBtn = contactForm.querySelector('#submit-contact-us');
  const nameInput = contactForm.querySelector('#name');
  const phoneInput = contactForm.querySelector('#phone');

  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const name = nameInput.value;
      const phone = phoneInput.value;
      console.log(name, phone);

      const foundContacts = await kommoAxios.get(`contacts?query=${phone}`);

      if (foundContacts.data._embedded.contacts.length > 0) {
        alert('This phone number already exists');
        return;
      }

      const lead = await kommoAxios.post('leads', {
        name,
      });
      console.log('lead', lead);

      const contact = await kommoAxios.post('contacts', {
        name,
        phone,
      });
      console.log('contact', contact);
    } catch (error) {
      console.log(error);
    }
  });
}
