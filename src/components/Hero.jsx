import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Hero.css"; // Import your custom CSS for the hero section
import heroImage from '../assets/nature4.webp'; // Path to your hero image

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Arohi Travels</h1>
        <p className="hero-subtitle">Explore the Heart of Maharashtra with Arohi Travels </p>
        <a href="/enquire">
        <button className="hero-button">Book Now</button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
