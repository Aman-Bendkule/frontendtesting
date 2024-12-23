import "../css/RentCar.css";

const cars = [
  {
    name: "Toyota Corolla",
    price: "₹1,800/day",
    features: "Fuel Efficient | 5 Seats | Automatic",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Honda City",
    price: "₹2,000/day",
    features: "Luxury Interior | 5 Seats | Automatic",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Maruti Suzuki Swift",
    price: "₹1,500/day",
    features: "Compact | 5 Seats | Manual",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Hyundai Creta",
    price: "₹2,500/day",
    features: "SUV | 7 Seats | Automatic",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mahindra Thar",
    price: "₹3,000/day",
    features: "Off-Road | 4 Seats | Manual",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "BMW 5 Series",
    price: "₹6,000/day",
    features: "Luxury | 5 Seats | Automatic",
    image: "https://via.placeholder.com/150",
  },
];

const RentCar = () => {
  return (
    <div className="rent-car-container">
      <h2 className="rent-car-title">Rent a Car</h2>
      <div className="rent-car-grid">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-details">
              <h3 className="car-name">{car.name}</h3>
              <p className="car-price">{car.price}</p>
              <p className="car-features">{car.features}</p>
              <button className="rent-button">Rent Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentCar;
