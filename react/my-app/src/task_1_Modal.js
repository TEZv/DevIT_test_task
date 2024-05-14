import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, disableGlobalScroll }) => {
  const [scrollDisabled, setScrollDisabled] = useState(false);

  useEffect(() => {
    if (disableGlobalScroll) {
      setScrollDisabled(isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [disableGlobalScroll, isOpen]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const toggleScrollLock = () => {
    setScrollDisabled(!scrollDisabled);
    document.body.style.overflow = scrollDisabled ? 'auto' : 'hidden';
  };

  return isOpen ? (
    <div
      className={`modal-overlay ${scrollDisabled ? 'scroll-disabled' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content" onClick={handleContentClick}>
        {children}
        <button onClick={onClose}>Close Modal</button>
        <button onClick={toggleScrollLock}>
          {scrollDisabled ? 'Enable Scrolling' : 'Disable Scrolling'}
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
