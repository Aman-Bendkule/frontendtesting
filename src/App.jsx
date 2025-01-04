import './App.css';
import Destination from './components/Destination';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

// Component to handle conditional rendering of Navbar and Footer
const Layout = ({ children }) => {
    const location = useLocation();

    // Define routes where Navbar and Footer should be hidden
    const hideNavbarFooter = ['/admin-login', '/dashboard'];

    const shouldHide = hideNavbarFooter.some(path => location.pathname.startsWith(path));

    return (
        <>
            {!shouldHide && <Navbar />}
            <div className="content-container">{children}</div>
            {!shouldHide && <Footer />}
        </>
    );
};

function App() {
    return (
        <Router>
            <div className="app-container">
                <ScrollToTop />
                <Layout>
                    <Routes>
                        {/* Public Routes with Navbar and Footer */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Services />
                                    <Destination />
                                    <TravelInfo />
                                    <Packages />
                                    <Testimonial />
                                    <FAQ />
                                    <ContactForm />
                                </>
                            }
                        />
                        <Route path="/rent-car" element={<RentCar />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/enquire" element={<Enquire />} />

                        {/* Admin Routes without Navbar and Footer */}
                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/dashboard/*" element={<AdminDashboard />} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
