import '../css/Banner.css';
import imageSrc from '../assets/banner.png'

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={imageSrc} alt="Image" className="banner-image" />
    </div>
  );
};

export default Banner;
