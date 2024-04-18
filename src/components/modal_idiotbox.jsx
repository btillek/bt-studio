import React from 'react'

export default function ModalIdiotbox({ open, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
      <iframe className="modal-vid"
      src="https://www.youtube.com/embed/r5QPd_XUwLY?si=U7RfXyzJJeVPb2Vu&amp;start=175"
      frameborder="0"
      allowfullscreen></iframe>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
