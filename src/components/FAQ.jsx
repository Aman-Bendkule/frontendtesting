import  { useState } from "react";
import "../css/FAQ.css";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: "Assured Support & Problem Resolution?",
      answer: "Our customer support is available via call, SMS, or WhatsApp at any time. You’ll receive prompt and satisfactory answers to any queries or issues regarding your Lonavala Sightseeing Cab trip. Our coordination process ensures effective problem resolution for a seamless experience.",
    },
    {
      question: "Instant Confirmation",
      answer: "Experience an advanced cab service with fast technology. Our upgraded system ensures instant confirmation for Lonavala Sightseeing Cabs, enhancing your booking experience.",
    },
    {
      question: "Family Verified Drivers",
      answer: "Rest assured with our trustworthy drivers, chosen based on good records, experience, and excellent reputation within the industry. We know our drivers and their families, ensuring the most reliable service.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept Cash Only.",
    },
    {
      question: "100% Booking Assurance",
      answer: "Book with confidence, knowing that once you reserve a cab through our website, you will 100% get the cab. If it’s available, you can book it without any worries.",
    },
    {
      question: "Most Affordable Lonavala Sightseeing Cab",
      answer: "Arohi Travels Services offers direct booking, eliminating extra commissions and providing the best lonavala sightseeing packages at competitive charges.",
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
