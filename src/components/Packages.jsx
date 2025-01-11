import { Link } from "react-router-dom";
import "../css/Packages.css";

const packages = [
  {
    title: "Lonavala Sightseeing Package - 3.5 Hrs",
    details: "Lonavala Lake | Bhushi Dam | Lions Point or Tiger Point (Shooting Point) | Reywood Park | Wax Museum",
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
  {
    title: "Lonavala Sightseeing Package - 6 Hrs",
    details: "Ryewood Park | Lonavala Lake | Bhushi Dam | Lions Point or Tiger Point | Shooting Point | Wax Museum | Narayani Dham | Sunset Point | Rajmachi Garden | Wakjai Temple | Khandala Lake",
    weekendRates: [
      { seats: "4 Seater", price: "₹1900" },
      { seats: "7 Seater", price: "₹2100" },
      { seats: "17 Seater", price: "₹5999" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹1700" },
      { seats: "7 Seater", price: "₹1900" },
      { seats: "17 Seater", price: "₹5499" },
    ],
  },
  {
    title: "Lonavala Premium Sightseeing - 7.5 Hrs",
    details: "Ryewood Park | Lonavala Lake | Bhushi Dam | Lions Point or Tiger Point | Shooting Point | Wax Museum | Narayani Dham | Sunset Point | Rajmachi Garden | Wakjai Temple | Khandala Lake | Mapro Garden | Karla Caves",
    weekendRates: [
      { seats: "4 Seater", price: "₹2400" },
      { seats: "7 Seater", price: "₹2800" },
      { seats: "17 Seater", price: "₹6500" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹2200" },
      { seats: "7 Seater", price: "₹2600" },
      { seats: "17 Seater", price: "₹6500" },
    ],
  },
  {
    title: "Lonavala Bundle Sightseeing Packages - 9.5 Hrs",
    details: "Ryewood Park | Lonavala Lake | Bhushi Dam | Lions Point or Tiger Point | Shooting Point | Wax Museum | Narayani Dham | Sunset Point | Rajmachi Garden | Wakjai Temple | Khandala Lake | Mapro Garden | Dinosaur Park | Pawna Dam | Lohgad Fort | Bhaje Caves",
    weekendRates: [
      { seats: "4 Seater", price: "₹3450" },
      { seats: "7 Seater", price: "₹3850" },
      { seats: "17 Seater", price: "₹9500" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹3250" },
      { seats: "7 Seater", price: "₹3750" },
      { seats: "17 Seater", price: "₹8500" },
    ],
  },
  {
    title: "Lonavala Sightseeing Lohgad Fort Package - 5 Hrs",
    details: "Lohgad Fort or Visapur Fort | Pawna Lake | Bhaje Caves",
    weekendRates: [
      { seats: "4 Seater", price: "₹2700" },
      { seats: "7 Seater", price: "₹2900" },
      { seats: "17 Seater", price: "₹5500" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹2500" },
      { seats: "7 Seater", price: "₹2700" },
      { seats: "17 Seater", price: "₹5500" },
    ],
  },
  {
    title: "Lonavala Sightseeing SunSet Special - 2 Hrs",
    details: "Lonavala Lake | Bhushi Dam | Lions Point or Tiger Point (Shooting Point) | Reywood Park | Wax Museum",
    weekendRates: [
      { seats: "4 Seater", price: "₹1200" },
      { seats: "7 Seater", price: "₹1550" },
      { seats: "17 Seater", price: "₹3000" },
    ],
    weekdayRates: [
      { seats: "4 Seater", price: "₹1000" },
      { seats: "7 Seater", price: "₹1150" },
      { seats: "17 Seater", price: "₹3000" },
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
                {/* <button className="btn btn-primary mt-4">Book Now</button> */}
                <Link to='/enquire' className="btn btn-primary mt-4">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
