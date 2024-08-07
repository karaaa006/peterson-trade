import gsap from 'gsap';
import { api } from '../libs/axios.lib';
import { notify } from '../utils/notify.utils';

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
      submitBtn.classList.add('is-loading');

      const name = nameInput.value;
      const phone = phoneInput.value;

      const foundContacts = await api.get(`/contact?query=${phone}`);
      if (foundContacts?.data) {
        console.log('Contact allready exists!');
        notify('Contact allready exists!', 'error');
        throw new Error('Contact allready exists!');
      }

      const newContact = await api.post('/contact', {
        name,
        phone,
      });

      const newLead = await api.post('/lead', {
        name,
        phone,
        pipeline_id: 8587595,
      });

      await api.post('/lead-contact-link', {
        lead_id: newLead.data._embedded.leads[0].id,
        contact_id: newContact.data._embedded.contacts[0].id,
      });

      nameInput.value = '';
      phoneInput.value = '';

      notify('Feedback sent successfully!', 'info');
    } catch (error) {
      console.log(error);
      notify('Error!', 'error');
    } finally {
      submitBtn.classList.remove('is-loading');
    }
  });
}
