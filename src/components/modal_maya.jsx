import React from 'react'

export default function ModalMaya({ open, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
      <iframe className="modal-vid"
      src="https://www.youtube.com/embed/oIC51zQvros?si=GYg3ODiIkE3-Ucm6"
      frameborder="0"
      allowfullscreen></iframe>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
