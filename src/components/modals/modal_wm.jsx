import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ModalWM({ open, onClose, animation }) {

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
        <iframe className="modal-vid" title="wrong-man" src="https://www.youtube.com/embed/Zs2X5-LR_Yk?si=p-LglHoPhNTsGFbU?autoplay=1" autoplay frameborder="0" allowfullscreen></iframe>
        <p className="closeBtn" onClick={onClose}>close</p>
      </motion.div>
    </div>)}
    </AnimatePresence>
  )
}
