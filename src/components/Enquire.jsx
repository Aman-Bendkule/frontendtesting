import React, { useState } from "react";
import '../css/Enquire.css'
const Enquire = () => {
  const [tripType, setTripType] = useState("");
  const [carType, setCarType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  
  // WhatsApp phone number
  const phoneNumber = "919028874741"; // Replace with your own WhatsApp number

  // Handle form submission and generate WhatsApp message
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message based on the form data
    const message = `
      Hello! I want to make an enquiry for a trip.\n\n
      Trip Type: ${tripType}\n
      Car Type: ${carType}\n
      Date: ${date}\n
      Name: ${name}\n
      Contact No.: ${contactNo}\n
      Please assist me with the details.
    `;

    // Encode the message for URL compatibility
    const encodedMessage = encodeURIComponent(message);

    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="enquire-form">
      <h2>Book Taxi / Make Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tripType">Trip Type *</label>
          <input
            type="text"
            id="tripType"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            placeholder="Enter Trip Type"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carType">Car Type *</label>
          <input
            type="text"
            id="carType"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            placeholder="Enter Car Type"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No. *</label>
          <input
            type="text"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="Enter Contact Number"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Enquire;
