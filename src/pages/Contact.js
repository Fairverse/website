import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1> İletişime Geçin</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Ad- Soyad</label>
          <input name="name" placeholder="Ad-soyad bilgilerini giriniz..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Emailinizi giriniz..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Mesajınızı giriniz..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Mesajı Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
