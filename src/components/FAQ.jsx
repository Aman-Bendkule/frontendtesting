import React, { useState } from "react";
import "../css/FAQ.css";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: "What is this service?",
      answer: "This service provides information and tools to help you organize events, manage tasks, and communicate effectively.",
    },
    {
      question: "How do I create an event?",
      answer: "To create an event, click on the 'Create Event' button and fill in the necessary details. You can add an event description, date, time, and location.",
    },
    {
      question: "Can I invite guests to the event?",
      answer: "Yes, you can invite guests by adding their email addresses during the event creation process. Guests will receive an invitation email with details about the event.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover.",
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer a mobile app for both iOS and Android devices that allows you to manage events and tasks on the go.",
    },
    {
      question: "How do I get support?",
      answer: "You can get support by reaching out via the contact form on our website or by emailing us at support@ourservice.com.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className={`faq-item ${expandedIndex === index ? "expanded" : ""}`}>
          <div className="faq-question" onClick={() => toggleExpand(index)}>
            {item.question}
            <span className={`faq-icon ${expandedIndex === index ? "open" : ""}`}>
              {expandedIndex === index ? "-" : "+"}
            </span>
          </div>
          {expandedIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
