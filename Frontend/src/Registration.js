import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from "react-router-dom";


function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
        navigate('/profile');
        console.log('Registration successful:', formData);
        setValidationErrors({});
      } else {
        setValidationErrors(errors);
      }
  };

  const validateForm = (data) => {
    const errors = {};

    const firstNameRegex = /^[a-zA-Z]+$/;
    if (!data.firstName.match(firstNameRegex)) {
      errors.firstName = 'Please enter a valid first name containing only letters.';
    }

    const lastNameRegex = /^[a-zA-Z]+$/;
    if (!data.lastName.match(lastNameRegex)) {
      errors.lastName = 'Please enter a valid last name containing only letters.';
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (data.password.length < 8) {
      errors.password = 'Password should be at least 8 characters long.';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  };

  return (
    <div>
      <h2>Profile Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {validationErrors.firstName && <span className="error">{validationErrors.firstName}</span>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {validationErrors.lastName && <span className="error">{validationErrors.lastName}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {validationErrors.email && <span className="error">{validationErrors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {validationErrors.password && <span className="error">{validationErrors.password}</span>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {validationErrors.confirmPassword && (
            <span className="error">{validationErrors.confirmPassword}</span>
          )}
        </div>

        <div>
        <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
