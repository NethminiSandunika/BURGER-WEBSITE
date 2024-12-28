import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Us</h2>
      <form className="contact__form">
        <input type="text" className="contact__input" placeholder="Your Name" />
        <input type="email" className="contact__input" placeholder="Your Email" />
        <textarea className="contact__input" placeholder="Your Message"></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
