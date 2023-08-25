import React, { useState } from 'react';
import '../App.css'; // Import your custom Contact styles

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Job Opportunity Inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:anyagah17@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me regarding job opportunities or any inquiries.</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="send-button" type="button" onClick={handleSubmit}>
          Send Email
        </button>
      </form>
    </section>
  );
};

export default Contact;
