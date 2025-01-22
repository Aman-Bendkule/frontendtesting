
import React, { useEffect, useState } from 'react';
import './ContactByUser.css';

const ContactByUser = () => {
  const [contactData, setContactData] = useState(null);

  const getContactData = async () => {
    const token = localStorage.getItem('adminToken');

    try {
      const response = await fetch('http://localhost:3000/contact-data', {
        headers: {
          'Authorization': token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
        setContactData(data);
      } else {
        console.error('Failed to fetch contact data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  const deleteData = async (id) => {
    try {
      let response = await fetch('http://localhost:3000/deleteCustomer', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        let message = await response.json();
        alert(message.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAll = async () => {
    const ids = contactData.map((data) => data.id);

    try {
      let response = await fetch('http://localhost:3000/delete-All', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: ids, title: 'Customer' }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = (contactNo) => {
    navigator.clipboard.writeText(contactNo)
      .then(() => {
        alert(`Contact number ${contactNo} copied to clipboard!`);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact by User</h2>
      {contactData && contactData.length > 0 ? (
        <>
          <div className="total-count">
            <h4>Total Contacts: {contactData.length}</h4>
          </div>
          <div className="contact-table-wrapper">
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Trip Type</th>
                  <th>Car Type</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Contact No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.tripType}</td>
                    <td>{contact.carType}</td>
                    <td>{contact.date}</td>
                    <td>{contact.name}</td>
                    <td>
                      <span
                        onClick={() => copyToClipboard(contact.contactNo)}
                        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                      >
                        {contact.contactNo}
                      </span>
                    </td>
                    <td>
                      <button onClick={() => deleteData(contact.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="deleteAllBtn">
              <button onClick={deleteAll}>Delete All</button>
            </div>
          </div>
        </>
      ) : (
        <h5>No data is available</h5>
      )}
    </div>
  );
};

export default ContactByUser;
