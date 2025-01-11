import React, { useState } from "react";
import '../css/Enquire.css';
import { v4 as uuidv4 } from 'uuid';

const tripTypes = [
    "One Way Cab",
    "Car Rent",
    "Tour Packages",
    "Lonavala Sightseeing",
    "Airport Transfer",
    "Local City Taxi"
];

const carTypes = [
    "Ertiga",
    "Swift Desire",
    "Innova Crysta",
    "Mahindra Xaylo",
    "Tavera",
    "Scorpio",
    "Tempo Travels",
    "Seventeen Seater",
    "Twenty Seater",
    "Thirty Two Seater",
    "Fifty Seater Bus"
];

const Enquire = () => {
    const [enquiryData, setEnquiryData] = useState({
        tripType: '',
        carType: '',
        date: '',
        name: '',
        contactNo: ''
    });

    const [errors, setErrors] = useState({});
    const phoneNumber = "919028874741";

    const handleChange = (e) => {
        setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!enquiryData.tripType) {
            newErrors.tripType = 'Trip Type is required';
        }

        if (!enquiryData.carType) {
            newErrors.carType = 'Car Type is required';
        }

        if (!enquiryData.date) {
            newErrors.date = 'Date is required';
        }

        if (!enquiryData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!enquiryData.contactNo.trim()) {
            newErrors.contactNo = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(enquiryData.contactNo)) {
            newErrors.contactNo = 'Contact Number must be a valid 10-digit number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('Please fix the errors in the form.');
            return;
        }

        try {
            let response = await fetch('https://backend-testing-wkft.onrender.com/submitData', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...enquiryData, id: uuidv4() })
            });

            if (response.ok) {
                const responseData = await response.json();
                alert(responseData.message);
            }
        } catch (error) {
            console.error('Error Submitting data:', error);
        }
    };

    return (
        <div className="enquire-form">
            <h2>Book Taxi / Make Enquiry</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="tripType">Trip Type *</label>
                    <select
                        id="tripType"
                        name="tripType"
                        value={enquiryData.tripType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Trip Type</option>
                        {tripTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {errors.tripType && <p className="error">{errors.tripType}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="carType">Car Type *</label>
                    <select
                        id="carType"
                        name="carType"
                        value={enquiryData.carType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Car Type</option>
                        {carTypes.map((car, index) => (
                            <option key={index} value={car}>{car}</option>
                        ))}
                    </select>
                    {errors.carType && <p className="error">{errors.carType}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={enquiryData.date}
                        onChange={handleChange}
                        required
                    />
                    {errors.date && <p className="error">{errors.date}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={enquiryData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="contactNo">Contact No. *</label>
                    <input
                        type="text"
                        id="contactNo"
                        name="contactNo"
                        value={enquiryData.contactNo}
                        onChange={handleChange}
                        placeholder="Enter Contact Number"
                        required
                    />
                    {errors.contactNo && <p className="error">{errors.contactNo}</p>}
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Enquire;
