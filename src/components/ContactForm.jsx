import React, { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-wrapper">
      {/* Company Info Section */}
      <div className="company-details">
        <h2 className="company-title">Contact Us</h2>
        <p className="company-description">
          Reach out to us for any queries, feedback, or collaboration
          opportunities. We're here to help!
        </p>
        <div className="details-group">
          <h4>Address:</h4>
          <p>123 Business Lane, Corporate City, 45678</p>
        </div>
        <div className="details-group">
          <h4>Phone:</h4>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="details-group">
          <h4>Email:</h4>
          <p>info@yourcompany.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2 className="form-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="form-control textarea"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
