import './App.css';
import Destination from './components/Destination';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import Banner from './components/Banner';
import FeedbackForm from './components/FeedbackForm';
import BookingPopup from './components/BookingPopup';


const isAuthenticated = () => {
    
    return !!localStorage.getItem('adminToken');
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/admin-login" replace />;
    }
    return children;
};

const Layout = ({ children }) => {
    const location = useLocation();

    const hideNavbarFooter = ['/admin-login', '/dashboard'];

    const shouldHide = hideNavbarFooter.some((path) => location.pathname.startsWith(path));

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
                                    <Banner/>
                                    {/* <FeedbackForm/> */}
                                    <ContactForm />
                                </>
                            }
                        />
                        <Route path="/rent-car" element={<RentCar />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/enquire" element={<Enquire />} />

                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route
                            path="/dashboard/*"
                            element={
                                <ProtectedRoute>
                                    <AdminDashboard />
                                </ProtectedRoute>
                            }
                        />
                        
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
