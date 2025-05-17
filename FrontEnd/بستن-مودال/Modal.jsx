import { useEffect, useRef, useState } from "react";

function Modal() {

  const [isOpen,setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  }

  const handleClickOutside = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      <button data-testid="btn" onClick={openModal}>OPEN</button>
      {/* or */}
      {
        isOpen && (
          <div data-testid="modal" ref={modalRef}>
            <h2>CLICK OUTSIDE OF ME</h2>
         </div>
        )
      }
    </>
  );
}

export default Modal;
