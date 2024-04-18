import React from 'react'

export default function ModalNerd({ open, onClose, url }) {
  if (!open) return null

  return (
    <>
      <div className="overlay"></div>
      {/* <p style={{position: "fixed", bottom: 24, paddingTop: 24, borderTop: "1px solid gray"}}>Online advertisement promoting the release of a new line of merchandise celebrating the 20th anniversary of N*E*R*D's debut album "In Search Of..."<br /><em>N*E*R*D</em></p> */}
      <div className="modal">
        <video className="modal-vid"
          controls
          muted
          autoplay=""
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRzNjJueW1pejAwNDBreTR3M29xOWNmZGU4ZTUxcDR6b2Zmd3ZteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/qipXYMHagoYkdMOSPu/giphy480p.mp4"
          data-giphy-id="qipXYMHagoYkdMOSPu">
        </video>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
