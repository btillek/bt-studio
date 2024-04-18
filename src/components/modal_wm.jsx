import React from 'react'

export default function ModalWM({ open, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
      <iframe className="modal-vid" src="https://www.youtube.com/embed/Zs2X5-LR_Yk?si=p-LglHoPhNTsGFbU" frameborder="0" allowfullscreen></iframe>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
