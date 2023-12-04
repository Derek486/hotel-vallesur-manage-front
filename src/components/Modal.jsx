import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-lg mx-auto my-6">
        <div className="bg-white rounded-lg shadow-lg relative flex flex-col p-5">
          <button
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            Cerrar
          </button>
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;