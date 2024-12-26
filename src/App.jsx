import './App.css';
import Destination from './components/Destination';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RentCar from './components/RentCar';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Packages from './components/Packages';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import FAQ from './components/FAQ';
import TravelInfo from './components/TravelInfo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from './components/Services';
import Enquire from './components/Enquire';


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar is always at the top */}
        <Navbar />
        {/* Main Content */}
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services/>
                  <Destination />
                  <TravelInfo/>
                  <Packages/>
                  <Testimonial/>
                  <FAQ/>
                  <ContactForm/>
                </>
              }
            />
            <Route path="/rent-car" element={<RentCar />} />
            <Route path="/about" element={<About />} />
            <Route path="/enquire" element={<Enquire />} />
          </Routes>
        </div>
        <ScrollToTop/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
