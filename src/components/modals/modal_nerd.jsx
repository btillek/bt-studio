import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalNerd({ open, onClose, animation }) {

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
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRzNjJueW1pejAwNDBreTR3M29xOWNmZGU4ZTUxcDR6b2Zmd3ZteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/qipXYMHagoYkdMOSPu/giphy480p.mp4"
              data-giphy-id="qipXYMHagoYkdMOSPu">
            </video>
            <p className="closeBtn" onClick={onClose}>close</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
