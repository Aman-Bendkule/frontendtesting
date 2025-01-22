// import React, { useState } from "react";
// import "../css/FeedbackForm.css";

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     rating: "5",
//     feedback: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for your feedback!");
//     console.log(formData);
//     setFormData({ name: "", email: "", rating: "5", feedback: "" });
//   };

//   return (
//     <div className="feedback-form-container">
//       <h2>Travel Feedback</h2>
//       <form onSubmit={handleSubmit} className="feedback-form">
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="rating">Rating</label>
//           <select
//             id="rating"
//             name="rating"
//             value={formData.rating}
//             onChange={handleChange}
//           >
//             <option value="5">Excellent</option>
//             <option value="4">Very Good</option>
//             <option value="3">Good</option>
//             <option value="2">Fair</option>
//             <option value="1">Poor</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="feedback">Feedback</label>
//           <textarea
//             id="feedback"
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             placeholder="Share your travel experience"
//             rows="5"
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-button">
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useState, useEffect } from "react";
import "../css/FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    feedback: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to toggle popup visibility

  useEffect(() => {
    // Show the popup after 3 seconds (3000ms) when the user visits the site
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 3000); // Adjust time as needed (3000ms = 3 seconds)

    // Cleanup the timer if the component unmounts before the time expires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    console.log(formData);
    setFormData({ name: "", email: "", rating: "5", feedback: "" });
    setIsPopupVisible(false); // Close the popup after submission
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Close the popup manually
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="feedback-form-popup">
          <div className="feedback-form-container">
            <h2>Travel Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">Excellent</option>
                  <option value="4">Very Good</option>
                  <option value="3">Good</option>
                  <option value="2">Fair</option>
                  <option value="1">Poor</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Share your travel experience"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit Feedback
              </button>
            </form>
            <button onClick={closePopup} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
