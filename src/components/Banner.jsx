import React from 'react';
import '../css/Banner.css';

const Banner = ({ imageSrc, altText }) => {
  return (
    <div className="banner-container">
      <img src={imageSrc} alt={altText} className="banner-image" />
    </div>
  );
};

export default Banner;
