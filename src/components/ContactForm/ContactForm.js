"use client"
import InputField from '../InputField/InputField';
import TextAreaField from '../TextAreaField/TextAreaField';
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000); // Simulamos una carga de 2 segundos
  };

  const handleSendOtherMessage = () => {
    setForm({ name: '', email: '', message: '' });
    setSuccess(false);
  };

  return (
    <section className={styles.contactForm}>
      {!success && <h2>Contact</h2>}
      {success ? (
        <div className={styles.successContainer}>
          <h3 className={styles.successMessage}>Message sent successfully!</h3>
          <button onClick={handleSendOtherMessage} className={styles.successButton}>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} >
          <InputField
            label="Name"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="JohnDoe@gmail.com"
          />
          <TextAreaField
            label="Message"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write something..."
          />
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
