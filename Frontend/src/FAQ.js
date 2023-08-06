import React, { useState } from "react";
import Navbar from "./Components/header";
import "./FAQ.css";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I create an account and authenticate myself?",
      answer:
        "To create an account, click on the 'Sign-Up' button and provide the required information. Once your account is created, you can log in using your credentials.",
    },
    {
      question: "How can I update my personal information and medical history?",
      answer:
        "Go to your patient profile page and click on the 'Edit Profile' button. From there, you can update your personal information, medical history, and contact details.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "To book an appointment, navigate to the 'Book Appointment' page and follow the prompts to select a date, time, and service provider.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, you can reschedule your appointment by visiting the 'View Appointments' page and selecting the appointment you wish to reschedule. Follow the instructions to choose a new date and time.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our cancellation policy allows you to cancel your appointment up to 24 hours in advance without any penalty. Late cancellations or no-shows may result in a fee.",
    },
    {
      question: "How can hospitals update their profile information?",
      answer:
        "Hospital administrators can log in to their account and access the hospital profile management section. There, they can update information about their facilities, services, specialties, and healthcare professionals.",
    },
    {
      question: "How do doctors manage their profiles and appointments?",
      answer:
        "Doctors can log in to their account and access the doctor profile management section. They can update their profiles, accept or reschedule appointments, take days off, check their monthly schedule, and provide remote consultations.",
    },
    {
      question:
        "How can patients provide ratings and reviews for hospitals and doctors?",
      answer:
        "Patients can navigate to the ratings page where they can provide ratings and share their experiences with different hospitals and doctors. This helps other users make informed decisions.",
    },
    {
      question:
        "How can I communicate with healthcare specialists and doctors?",
      answer:
        "Within the application, you can access the chat feature to communicate directly with healthcare specialists and doctors for inquiries, consultations, and expert advice.",
    },
    {
      question: "How can I view and share my medical records securely?",
      answer:
        "On your patient profile page, you can access the medical records section. There, you can view diagnoses, lab results, prescriptions, and imaging reports. You can also securely share them with healthcare providers.",
    },
    {
      question:
        "How do I schedule appointments with doctors, specialists, and labs?",
      answer:
        "Navigate to the appointment scheduling module and follow the prompts to select your preferred healthcare professional or lab, choose a suitable date and time based on availability, and confirm your appointment.",
    },
    {
      question: "Can I access informative articles and health tips?",
      answer:
        "Yes, the application includes a dedicated blog section where healthcare professionals publish informative articles, health tips, updates, and other relevant content to educate and engage users.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
      <div className="faq-container">
        <Navbar/>
      <h1 className="help-title">Happy to HELP you!</h1>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
