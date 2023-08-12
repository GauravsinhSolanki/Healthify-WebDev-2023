import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from './Components/header';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    <div>
    </div>
    <div className="contact-us-container">
      <h1 className='heading'>CONTACT US</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
          type='text'
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></input>
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
