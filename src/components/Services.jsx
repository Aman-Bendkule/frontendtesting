// import "../css/Services.css";

// const servicesData = [
//   {
//     id: 1,
//     title: "Car Rentals",
//     description: "Affordable and reliable car rentals for your travel needs.",
//     icon: "🚗",
//   },
//   {
//     id: 2,
//     title: "Tour Packages",
//     description: "Explore the best destinations with our curated tour packages.",
//     icon: "🌍",
//   },
//   {
//     id: 3,
//     title: "Airport Transfers",
//     description: "Hassle-free airport transfers at any time of the day.",
//     icon: "✈️",
//   },
//   {
//     id: 4,
//     title: "Hotel Bookings",
//     description: "Best Hotel's Booking Through Arohi Travels with best Tieup's",
//     icon: "🏩",
//   },
//   {
//     id: 5,
//     title: "One Way Cabs",
//     description: "Book the best Cabs For One Way at affordable prices.",
//     icon: "🏨",
//   },
//   {
//     id: 6,
//     title: "local City Taxi",
//     description: "We provide Local City Taxi Service at affordable prices.",
//     icon: "🚕",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="services-container">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="services-staggered-grid">
//         {servicesData.map((service, index) => (
//           <div
//             className={`service-card ${index % 2 === 0 ? "highlight" : ""}`}
//             key={service.id}
//           >
//             <div className="service-icon">{service.icon}</div>
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-description">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


import React, { useEffect, useState } from "react";
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
    title: "Hotel Bookings",
    description: "Best Hotel's Booking Through Arohi Travels with best Tieup's",
    icon: "🏩",
  },
  {
    id: 5,
    title: "One Way Cabs",
    description: "Book the best Cabs For One Way at affordable prices.",
    icon: "🏨",
  },
  {
    id: 6,
    title: "Local City Taxi",
    description: "We provide Local City Taxi Service at affordable prices.",
    icon: "🚕",
  },
];

const Services = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY; // Reset scroll position
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (scrollDirection === 'down') {
          entry.target.classList.add("down-scroll");
        } else if (scrollDirection === 'up') {
          entry.target.classList.add("up-scroll");
        }
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger animation when 50% of the card is in view
    });

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, [scrollDirection]);

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
