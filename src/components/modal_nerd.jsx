import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalNerd({ open, onClose, url }) {
  if (!open) return null

  const initialValues = { y: window.innerHeight };
  const animateValues = { y: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] } }
  const exitValues = { y: window.innerHeight, transition: { duration: 3, ease: [0.20, 0, 0.13, 1] } }

  return (
    <>
      <AnimatePresence>
        <motion.div className="overlay"
          onClick={onClose}
          initial={initialValues}
          animate={animateValues}
          exit={exitValues}
          >
        </motion.div>
        <motion.div className="modal"
          initial={initialValues}
          animate={animateValues}
          exit={exitValues}
          >
          <video className="modal-vid"
            controls
            muted
            autoplay=""
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRzNjJueW1pejAwNDBreTR3M29xOWNmZGU4ZTUxcDR6b2Zmd3ZteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/qipXYMHagoYkdMOSPu/giphy480p.mp4"
            data-giphy-id="qipXYMHagoYkdMOSPu">
          </video>
          <p onClick={onClose}>close</p>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
