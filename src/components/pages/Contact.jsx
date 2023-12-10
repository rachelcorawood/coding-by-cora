import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_f39pio4";
    const templateId = "contact_form";
    const publicKey = "8x-DIm1tli9O5PUgW";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Thank you for reaching out! Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })


  }

  return (
    <>
      <h1 className="contactTitle">Thanks for taking the time to reach out. <br></br> How can I help you today?</h1>
      <form onSubmit={handleSubmit} className='emailForm'>
        <input
          type='text'
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols='30'
          rows='10'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        > </textarea>
      </form>
      <button type="btn" className="contactButton"> Submit </button>
    </>
  )
}
