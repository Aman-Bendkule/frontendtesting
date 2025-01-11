// import './App.css';
// import Destination from './components/Destination';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RentCar from './components/RentCar';
// import About from './components/About';
// import Testimonial from './components/Testimonial';
// import Packages from './components/Packages';
// import ContactForm from './components/ContactForm';
// import ScrollToTop from './components/ScrollToTop';
// import FAQ from './components/FAQ';
// import TravelInfo from './components/TravelInfo';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './App.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Services from './components/Services';
// import Enquire from './components/Enquire';
// import banner from './assets/banner.png'
// import Banner from './components/Banner';
// import AdminLogin from './admin/AdminLogin';
// import AdminDashboard from './admin/AdminDashboard';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Navbar is always at the top */}
//         <Navbar />
//         {/* Main Content */}
//         <div className="content-container">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <Services/>
//                   <Destination />
//                   <TravelInfo/>
//                   <Packages/>
//                   <Testimonial/>
//                   <FAQ/>
//                   <Banner 
//         imageSrc={banner} 
//         altText="Banner Image" 
//       />
//                   <ContactForm/>
//                 </>
//               }
//             />
//             <Route path="/rent-car" element={<RentCar />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/enquire" element={<Enquire />} />
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             <Route path="/admin-login" element={<AdminLogin />} />
//           </Routes>
//         </div>
//         <ScrollToTop/>
//         <Footer />
//       </div>
//     </Router>
//   );





// }

// export default App;


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
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from './components/Services';
import Enquire from './components/Enquire';
import banner from './assets/banner.png';
import Banner from './components/Banner';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ContactByUser from './admin/ContactByUser';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Services />
                <Destination />
                <TravelInfo />
                <Packages />
                <Testimonial />
                <FAQ />
                <Banner imageSrc={banner} altText="Banner Image" />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route path="/rent-car" element={<><Navbar /><RentCar /><Footer /></>} />
          <Route path="/https://travels-dusky.vercel.app/" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/enquire" element={<><Navbar /><Enquire /><Footer /></>} />
          
          {/* Admin routes without Navbar and Footer */}
          <Route path="/dashboard/*" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
        
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
