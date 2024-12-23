import "../css/TravelInfo.css";

const TravelInfo = () => {
  return (
    <div className="travel-info-container">
      <div className="travel-info-section travel-info-left">
        <h2 className="travel-info-title">Hassle-Free and Comfortable Travel</h2>
        <p className="travel-info-description">
          We are currently based in Lonavala and offer high-class cab services to
          different nearby locations and all the major cities of Pan India. In
          our fleet, you will find all the trending taxi models and comfort cars.
        </p>
      </div>
      <div className="travel-info-section travel-info-right">
        <h2 className="travel-info-title">We Follow Best Practices</h2>
        <ul className="travel-info-list">
          <li className="travel-info-item">Experienced Drivers</li>
          <li className="travel-info-item">On Time Service</li>
          <li className="travel-info-item">Door Step Pickup/Drop</li>
          <li className="travel-info-item">Transparent Billing</li>
        </ul>
      </div>
    </div>
  );
};

export default TravelInfo;
