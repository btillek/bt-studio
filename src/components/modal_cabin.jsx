import React from 'react'

export default function ModalCabin({ open, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <video className="modal-vid"
          controls
          muted
          autoplay=""
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHZmaXY5ajRiZ3hoZGoxaTdneDk2dzJlZ2p1eXh3ZDdqOHgxcGd2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/wIJzSKEX4CkHeBg0rt/giphy480p.mp4"
        >
        </video>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
