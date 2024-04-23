import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Dice1 from './images/Dice-1.gif'
import Dice2 from './images/Dice-2.gif'
import Dice3 from './images/Dice-3.gif'

export default function ModalDice({ open, onClose, animation }) {

  const imgContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "90vw"
  }

  const imgStyles = {
    width: "29vw"
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
            <div style={imgContainerStyles} >
              <img style={imgStyles} src={Dice1} alt="dice" />
              <img style={imgStyles} src={Dice2} alt="dice" />
              <img style={imgStyles} src={Dice3} alt="dice" />
            </div>
            <p className="closeBtn" onClick={onClose}>close</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
