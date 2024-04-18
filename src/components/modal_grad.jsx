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
      <p style={{position: "fixed", top: 24, right: "auto", padding: 24, border: "1px solid gray"}}>
        Online advertisement promoting the 15th anniversary of Kanye West's "Graduation" album
        <br /><em>Universal Music Group</em>
      </p>
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
