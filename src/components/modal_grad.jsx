import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Graduation from './videos/Graduation.mp4'

export default function Modalgrad({ open, onClose, animation }) {

  const gradStyles = {
    width: "45vw",
    aspectRatio: "1 / 1"
  }

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
            <video style={gradStyles}
              controls
              muted
              autoplay=""
              src={Graduation}
            >
            </video>
            <p className="closeBtn" onClick={onClose}>close</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
