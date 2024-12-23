import{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Testimonial.css"; // Ensure this file exists and links correctly

const testimonials = [
  { img: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', text: 'This service was excellent and the customer support was outstanding!' },
  { img: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Smith', text: 'I had a wonderful experience! Highly recommend it to everyone.' },
  { img: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Alex Johnson', text: 'Fantastic service! Will definitely use it again!' },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <h1>What People Say</h1>
      <div className="testimonial-container d-flex justify-content-center align-items-center">
      <div className="card testimonial-card">
        <img src={testimonials[currentIndex].img} className="card-img-top rounded-circle mx-auto mt-4" alt="Testimonial" />
        <div className="card-body text-center">
          <h5 className="card-title">{testimonials[currentIndex].name}</h5>
          <p className="card-text">{testimonials[currentIndex].text}</p>
        </div>
      </div>
    </div>
    </> 
  );
};

export default Testimonial;
