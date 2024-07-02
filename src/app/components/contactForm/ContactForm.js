"use client"
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className={styles.contactForm}>
      <h2>Contacto</h2>
      {success ? <p>Mensaje enviado con éxito!</p> : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
