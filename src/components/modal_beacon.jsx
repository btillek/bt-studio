import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalBeacon({ open, onClose, animation }) {

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
            <iframe className="modal-vid" src="https://www.youtube.com/embed/ksSO_TW3liE?si=ChmZ6e0gG5MQyVDq" frameborder="0" allowfullscreen></iframe>
            <p className="closeBtn" onClick={onClose}>close</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
