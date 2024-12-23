import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Footer.css"; // Ensure this file exists and links correctly

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container py-4">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5 className="footer-title">Arohi Travels</h5>
            <p>
              We are dedicated to providing the best travel experiences with personalized service and unforgettable destinations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="col-md-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="mt-3">
              <strong>Email:</strong> contact@travel.com<br />
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center py-3">
        <p className="m-0">© 2024 Arohi Travels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
