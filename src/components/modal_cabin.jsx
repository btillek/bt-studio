import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalCabin({ open, onClose, animation }) {

  return (
    <AnimatePresence>
      {open && (
        <div>
          <motion.div
            className="overlay"
            key="overlay"
            onClick={onClose}
            initial={animation.overlayInitial}
            animate={animation.overlayAnimate}
            exit={animation.overlayExit}
          />

          <motion.div
            className="modal"
            key="modal"
            initial={animation.modalInitial}
            animate={animation.modalAnimate}
            exit={animation.modalExit}
          >
            <video className="modal-vid"
              controls
              muted
              autoplay=""
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHZmaXY5ajRiZ3hoZGoxaTdneDk2dzJlZ2p1eXh3ZDdqOHgxcGd2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/wIJzSKEX4CkHeBg0rt/giphy480p.mp4"
            >
            </video>
            <p className="closeBtn" onClick={onClose}>close</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
