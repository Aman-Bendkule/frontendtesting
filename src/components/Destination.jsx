import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Destination.css"; // Ensure this CSS file exists

const destinations = [
  {
    img: 'https://lonavalataxiservice.com/wp-content/uploads/2023/06/lions-pont.webp',
    title: 'Lions Point',
    description: 'Panoramic hilltop vantage point renowned for its breathtaking valley views, serene sunrises and sunsets, and lush monsoon ambiance.',
  },
  {
    img: 'https://lonavalataxiservice.com/wp-content/uploads/2023/06/shooting-point.webp',
    title: 'Shooting Point',
    description: 'This point offers breathtaking views of the river valley and aerial view of the Rajmachi Fort. This place comes alive...',
  },
  {
    img: 'https://lonavalataxiservice.com/wp-content/uploads/2023/06/tigers-leap.webp',
    title: 'Tiger’s Leap',
    description: 'One should visit and explore the place. There are many place like Tigers leap one should visit.',
  },
  {
    img: 'https://lonavalataxiservice.com/wp-content/uploads/2023/06/Bhaja-Caves.webp',
    title: 'Bhaja Caves',
    description: 'Amazing hand carved stone caves by Buddhist Monks some 5000yrs ago.',
  },
  {
    img: 'https://lonavalataxiservice.com/wp-content/uploads/2023/06/Sunset-Point.webp',
    title: 'Sunset Point',
    description: 'This is the highest point in lonavala and is very famous for sunset point. you will find many vendors serving tea and snacks there.',
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
