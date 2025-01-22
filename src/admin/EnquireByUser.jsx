import React, { useEffect, useState } from 'react';
import './EnquireByUser.css';  // Import the CSS file for styling

const EnquireByUser = () => {
   
      const [enquiryData,setEnquiryData] = useState(null)
      
      const getEnquiryData = async ()=>{
        const token = localStorage.getItem('adminToken');
    
        try {
          let response = await fetch('https://backend-testing-wkft.onrender.com/enquiry-data',{
            headers: {
                    'Authorization': token,
                },
          });
    
    
          if (response.ok) {
            let responseData = await response.json();
            setEnquiryData(responseData)  
          }
    
        } catch (error) {
          console.error('Error : ',error);
          
        }
      }
    
      useEffect(() => {
        getEnquiryData();
      },[])
      

    return (
        <div className="enquire-container">
            <h2>Enquire by User</h2>
            {enquiryData ?(
             <>
             <div className="total-count">
               <h4>Total Enquire: {enquiryData.length}</h4>
             </div>
            <div className="table-wrapper">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiryData.map((enquiry, index) => (
                            <tr key={index}>
                                <td>{enquiry.name}</td>
                                <td>{enquiry.email}</td>
                                <td>{enquiry.subject}</td>
                                <td>{enquiry.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             </>
            ):(<h5>No Data Available</h5>)}
        </div>
    );
};

export default EnquireByUser;
