import React, { useState } from "react";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

const BookingPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Accept Bookings
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            maxWidth: "500px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2>We Accept Booking Through WhatsApp</h2>
        <p>
          You can enquire or book directly with us through WhatsApp. Click the
          button below to proceed.
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              backgroundColor: "#25d366",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Book on WhatsApp
          </a>
          <button
            onClick={closeModal}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              color: "#000",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingPopup;
