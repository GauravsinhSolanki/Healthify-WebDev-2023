import React, { useState } from "react";
import styles from "./ContactUs.css";
import Navbar from "./Components/header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="Main-Container">
        <div className={styles.contactUsContainer}>
          <h2 className={styles.heading}>Stay Connected With Us</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              />
            </div>
            <button className={styles.btn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
