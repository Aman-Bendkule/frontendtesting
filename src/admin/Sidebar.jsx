import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const toggleButton = document.querySelector('.sidebar-toggle');
      if (sidebar && !sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    // Clear the token from localStorage
    localStorage.removeItem('adminToken');
    // Redirect to login page
    navigate('/');
  };

  const isAuthenticated = localStorage.getItem('adminToken'); // Check if the token exists

  if (!isAuthenticated) {
   
    return null; 
  }

  return (
    <div>
      {/* Hamburger Icon for Small Screens */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <Link to="/dashboard/contact">Contact by User</Link>
        <Link to="/dashboard/enquire">Enquire by User</Link>
        <Link onClick={handleHomeClick}>Home</Link>
      </div>
    </div>
  );
};

export default Sidebar;
