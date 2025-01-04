import { useState } from "react";
import '../css/Enquire.css';

const Enquire = () => {
  const [tripType, setTripType] = useState("");
  const [carType, setCarType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");

  const tripTypes = [
    "One Way Cab",
    "Car Rent",
    "Tour Packages",
    "Hotel Bookings",
    "Airport Transfer",
    "Local City Taxi",
  ];

  const carTypes = [
    "Ertiga",
    "Swift Desire",
    "Innova Crysta",
    "Mahindra Xaylo",
    "Tavera",
    "Scorpio",
    "Tempo Travels",
    "Seventeen Seater",
    "Twenty Seater",
    "Thirty Two Seater",
    "Fifty Seater Bus",
  ];

  // Handle form submission
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

    // Log message for demonstration (remove or replace with desired action)
    console.log(message);
  };

  return (
    <div className="enquire-form">
      <h2>Book Taxi / Make Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tripType">Trip Type *</label>
          <select
            id="tripType"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            required
          >
            <option value="">Select Trip Type</option>
            {tripTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="carType">Car Type *</label>
          <select
            id="carType"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            required
          >
            <option value="">Select Car Type</option>
            {carTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
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
