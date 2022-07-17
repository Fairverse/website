import React from 'react';
import emailjs from 'emailjs-com';

import '../styles/Contact.css';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_i4yz6tl', 'template_zgofptf', e.target, 's2xENye55tST9E5qD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Kullanıcı Adı</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mesaj</label>
      <textarea name="message" />
      <input type="submit" value="Gönder" />
    </form>
  );
  }