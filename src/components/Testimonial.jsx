import{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Testimonial.css"; // Ensure this file exists and links correctly
import user1 from '../assets/user.png';

const testimonials = [
  { img: user1, name: 'Pratik Jadhav', text: 'Most affordable rental cars in lonavala. Neet an clean cars. Verry good travels thank you..' },
  { img: user1, name: 'Avinash Desai', text: 'The service is very good, the driver is very helpful and supportive. And the price is very good' },
  { img: user1, name: 'Kshitija Gaikwad', text: 'Very nice service Very good driver' },
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
