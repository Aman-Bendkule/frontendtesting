import "../css/Packages.css";

const packages = [
  {
    title: "Lonavala Sightseeing Package - 3.5 Hrs",
    details: "Lonavala Lake | Bhushi Dam | Lions Point or Tiger Point | Reywood Park | Wax Museum",
    weekendRates: [
      { seats: "4 Seater", price: "₹1700" },
      { seats: "7 Seater", price: "₹1900" },
      { seats: "17 Seater", price: "₹4999" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹1599" },
      { seats: "7 Seater", price: "₹1699" },
      { seats: "17 Seater", price: "₹4999" },
    ],
  },
  // Add more packages for 6 cards
  {
    title: "Adventure Package - Full Day",
    details: "Waterfalls | Hiking Trails | Mountain Ranges | Adventure Parks",
    weekendRates: [
      { seats: "4 Seater", price: "₹2500" },
      { seats: "7 Seater", price: "₹3000" },
      { seats: "17 Seater", price: "₹7000" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹2200" },
      { seats: "7 Seater", price: "₹2700" },
      { seats: "17 Seater", price: "₹6500" },
    ],
  },
  // Add 4 more packages
  {
    title: "Relaxation Package - Half Day",
    details: "Spa | Yoga Retreat | Organic Cafe | Scenic Views",
    weekendRates: [
      { seats: "4 Seater", price: "₹2000" },
      { seats: "7 Seater", price: "₹2500" },
      { seats: "17 Seater", price: "₹6000" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹1800" },
      { seats: "7 Seater", price: "₹2300" },
      { seats: "17 Seater", price: "₹5500" },
    ],
  },
  {
    title: "Cultural Heritage Tour",
    details: "Ancient Temples | Museums | Cultural Performances | Art Galleries",
    weekendRates: [
      { seats: "4 Seater", price: "₹2200" },
      { seats: "7 Seater", price: "₹2700" },
      { seats: "17 Seater", price: "₹6500" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹2000" },
      { seats: "7 Seater", price: "₹2400" },
      { seats: "17 Seater", price: "₹6000" },
    ],
  },
  {
    title: "Wildlife Safari Package",
    details: "Safari Rides | Jungle Trails | Wildlife Spotting | Eco Lodges",
    weekendRates: [
      { seats: "4 Seater", price: "₹2700" },
      { seats: "7 Seater", price: "₹3200" },
      { seats: "17 Seater", price: "₹7500" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹2400" },
      { seats: "7 Seater", price: "₹3000" },
      { seats: "17 Seater", price: "₹7000" },
    ],
  },
  {
    title: "Beach Getaway Package",
    details: "Beach Resorts | Water Sports | Sunset Views | Local Seafood",
    weekendRates: [
      { seats: "4 Seater", price: "₹2300" },
      { seats: "7 Seater", price: "₹2800" },
      { seats: "17 Seater", price: "₹6800" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹2100" },
      { seats: "7 Seater", price: "₹2600" },
      { seats: "17 Seater", price: "₹6500" },
    ],
  },
];

const Packages = () => {
  return (
    <div className="packages-container">
      <h1 className="head text-center mb-5">Explore Our Packages</h1>
      <div className="row">
        {packages.map((pkg, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="package-card shadow">
              <div className="card-body">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-text">{pkg.details}</p>
                <h6 className="rates-title">Weekend Rates</h6>
                <ul>
                  {pkg.weekendRates.map((rate, idx) => (
                    <li key={idx}>
                      {rate.seats}: <strong>{rate.price}</strong>
                    </li>
                  ))}
                </ul>
                <h6 className="rates-title">Weekday Rates</h6>
                <ul>
                  {pkg.weekdayRates.map((rate, idx) => (
                    <li key={idx}>
                      {rate.seats}: <strong>{rate.price}</strong>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-3">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
