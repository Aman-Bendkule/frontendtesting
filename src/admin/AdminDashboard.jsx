import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ContactByUser from './ContactByUser';
import EnquireByUser from './EnquireByUser';
import './AdminDashboard.css';

const AdminDashboard = () => {
   
    console.log(`dashboard`);
    
    return (
        <>
        <h1 style={{ marginLeft: '20rem' }}>Welcome To Admin Dashboard</h1>
        <h3 style={{ marginLeft: '50rem' }}>Manage The Details</h3>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            
            <div>
                <Routes>
                    <Route path="contact" element={<ContactByUser />} />
                    <Route path="enquire" element={<EnquireByUser />} />
                </Routes> 
            </div>
        </div>
        </>
        
    );
};

export default AdminDashboard;


