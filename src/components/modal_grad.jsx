import React from 'react'
import Graduation from './videos/Graduation.mp4'

export default function Modalgrad({ open, onClose, url }) {
  if (!open) return null

  const gradStyles = {
    width: "45vw",
    aspectRatio: "1 / 1"
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <video style={gradStyles}
          controls
          muted
          autoplay=""
          src={Graduation}
        >
        </video>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
