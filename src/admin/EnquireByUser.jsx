import React from 'react';
import './EnquireByUser.css';  // Import the CSS file for styling

const EnquireByUser = () => {
    // Sample data for the table
    const enquiryData = [
        {
            name: 'John Doe',
            email: 'johndoe@example.com',
            subject: 'Inquiry about car rental',
            message: 'I would like to know more about your car rental services.',
        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            subject: 'Booking query',
            message: 'Can I book a car for a week starting next month?',
        },
        {
            name: 'Alice Johnson',
            email: 'alicejohnson@example.com',
            subject: 'Payment issue',
            message: 'I am facing an issue while making the payment for my booking.',
        },
    ];

    return (
        <div className="enquire-container">
            <h2>Enquire by User</h2>
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
        </div>
    );
};

export default EnquireByUser;
