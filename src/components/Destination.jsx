import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Destination.css"; // Ensure this CSS file exists

const destinations = [
  {
    img: 'https://images.unsplash.com/photo-1732058824460-d89cb7b4a38f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    title: 'Explore Beautiful Beaches',
    description: 'Discover the serene beauty and tranquility of pristine beaches.',
  },
  {
    img: 'https://images.unsplash.com/photo-1721641843496-3c8c60eab024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
    title: 'Discover Mountain Trails',
    description: 'Hike through breathtaking trails with stunning views.',
  },
  {
    img: 'https://images.unsplash.com/photo-1731412895386-f243767a59c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
    title: 'Relax at Luxurious Resorts',
    description: 'Enjoy a perfect getaway at world-class resorts.',
  },
];

const Destination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000); // Change destination every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="destination-container">
      <h1 className="destination-title">Destinations</h1>
      <div className="destination-content">
        <div className="image-container">
          <img src={destinations[currentIndex].img} alt="Destination" />
        </div>
        <div className="text-container">
          <h2>{destinations[currentIndex].title}</h2>
          <p>{destinations[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
