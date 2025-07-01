// src/components/Modal.jsx
import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h1 className="text-xl font-bold mb-4">Please download the AI Session Management Driver</h1>
        <a href = "/driver/driver.exe" download="AISession_Driver.rar">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          OK
        </button>
        </a>
      </div>
    </div>
  );
};

export default Modal;
