import React from 'react';
import "../css/Services.css";

const servicesData = [
  {
    id: 1,
    title: "Car Rentals",
    description: "Affordable and reliable car rentals for your travel needs.",
    icon: "🚗",
  },
  {
    id: 2,
    title: "Tour Packages",
    description: "Explore the best destinations with our curated tour packages.",
    icon: "🌍",
  },
  {
    id: 3,
    title: "Airport Transfers",
    description: "Hassle-free airport transfers at any time of the day.",
    icon: "✈️",
  },
  {
    id: 4,
    title: "Luxury Travel",
    description: "Experience luxury with our premium travel services.",
    icon: "✨",
  },
  {
    id: 5,
    title: "One Way Cabs",
    description: "Book the best Cabs For One Way at affordable prices.",
    icon: "🏨",
  },
  {
    id: 6,
    title: "Corporate Travel",
    description: "Tailored travel solutions for businesses and professionals.",
    icon: "💼",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-staggered-grid">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${index % 2 === 0 ? "highlight" : ""}`}
            key={service.id}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
