import React from 'react'

export default function ModalBeacon({ open, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
      <iframe className="modal-vid" src="https://www.youtube.com/embed/ksSO_TW3liE?si=ChmZ6e0gG5MQyVDq" frameborder="0" allowfullscreen></iframe>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
