import '../css/AboutUs.css';
import AboutImg from '../assets/about.jpg'

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>About Us</h1>
        <p>
          We are a team of passionate individuals dedicated to delivering exceptional 
          services and creating meaningful experiences for our clients.
        </p>
        <div className="aboutus-icons">
          <div className="icon-item">
            <i className="fas fa-briefcase"></i>
            <p>Professional Services</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-handshake"></i>
            <p>Client-Centric Approach</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-lightbulb"></i>
            <p>Innovative Solutions</p>
          </div>
        </div>
      </div>
      <div className="aboutus-image">
        <img
          src={AboutImg}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutUs;
