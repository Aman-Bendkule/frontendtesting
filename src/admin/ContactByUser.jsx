import React, { useEffect, useState } from 'react';
import './ContactByUser.css';

const ContactByUser = () => {
  // Sample data for the table
  // const contactData = [
  //   {
  //     tripType: 'Business',
  //     carType: 'Sedan',
  //     date: '2025-01-10',
  //     name: 'John Doe',
  //     contactNo: '123-456-7890',
  //   },
  //   {
  //     tripType: 'Vacation',
  //     carType: 'SUV',
  //     date: '2025-01-12',
  //     name: 'Jane Smith',
  //     contactNo: '987-654-3210',
  //   },
  //   {
  //     tripType: 'Commute',
  //     carType: 'Hatchback',
  //     date: '2025-01-15',
  //     name: 'Alice Johnson',
  //     contactNo: '456-789-1234',
  //   },
  // ];

  const [contactData,setContactData] = useState(null)
  
  const getContactData = async ()=>{
    const token = localStorage.getItem('adminToken');

    try {
        const response = await fetch('http://localhost:3000/contact-data', {
            headers: {
                'Authorization': token,
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`Data : `,data);
            setContactData(data);
        } else {
            console.error('Failed to fetch contact data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  }

  useEffect(() => {
    getContactData();
  },[])
  

  return (
    <div className="contact-container">
      <h2>Contact by User</h2>
      {contactData ?
     
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Trip Type</th>
              <th>Car Type</th>
              <th>Date</th>
              <th>Name</th>
              <th>Contact No</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact, index) => (
              <tr key={index}>
                <td>{contact.tripType}</td>
                <td>{contact.carType}</td>
                <td>{contact.date}</td>
                <td>{contact.name}</td>
                <td>{contact.contactNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    :<h5>No data is available</h5>}
    </div>
  );
};

export default ContactByUser;
