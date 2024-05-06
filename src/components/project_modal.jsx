import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './project_modal.css'

import Graduation from './videos/Graduation.mp4'
import Dice1 from './images/Dice-1.gif'
import Dice2 from './images/Dice-2.gif'
import Dice3 from './images/Dice-3.gif'

export default function ProjectModal({ open, onClose }) {

  const modalAnimation = {
    overlayInitial: { y: -window.innerHeight },
    overlayAnimate: { y: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] } },
    overlayExit: { y: window.innerHeight, transition: { duration: 1, delay: 0.5, ease: [0.20, 0, 0.13, 1] } },
    modalInitial: { opacity: 0 },
    modalAnimate: { opacity: 1, transition: { duration: 1, delay: 1 } },
    modalExit: { opacity: 0, transition: { duration: 0.5 } }
  }

  const gradStyles = {
    width: "45vw",
    aspectRatio: "1 / 1"
  }

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
            onClick={onClose}
            initial={modalAnimation.overlayInitial}
            animate={modalAnimation.overlayAnimate}
            exit={modalAnimation.overlayExit}
            />

          <motion.div
            className="modal"
            initial={modalAnimation.modalInitial}
            animate={modalAnimation.modalAnimate}
            exit={modalAnimation.modalExit}
            >

            {open === "nerd" && (
              <video className="modal-vid"
                controls
                muted
                autoplay=""
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRzNjJueW1pejAwNDBreTR3M29xOWNmZGU4ZTUxcDR6b2Zmd3ZteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/qipXYMHagoYkdMOSPu/giphy480p.mp4"
                data-giphy-id="qipXYMHagoYkdMOSPu">
              </video>
            )}

            {open === "grad" && (
              <video style={gradStyles}
                controls
                muted
                autoplay=""
                src={Graduation}
              >
              </video>
            )}

            {open === "dice" && (
              <div style={imgContainerStyles} >
              <img style={imgStyles} src={Dice1} alt="dice" />
              <img style={imgStyles} src={Dice2} alt="dice" />
              <img style={imgStyles} src={Dice3} alt="dice" />
            </div>
            )}

            {open === "cabin" && (
              <video className="modal-vid"
                controls
                muted
                autoplay=""
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHZmaXY5ajRiZ3hoZGoxaTdneDk2dzJlZ2p1eXh3ZDdqOHgxcGd2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/wIJzSKEX4CkHeBg0rt/giphy480p.mp4"
              >
              </video>
            )}

            {open === "maya" && (
              <iframe className="modal-vid"
              title="maya"
              src="https://www.youtube.com/embed/oIC51zQvros?si=GYg3ODiIkE3-Ucm6"
              frameborder="0"
              allowfullscreen></iframe>
            )}

            {open === "idiotbox" && (
              <iframe className="modal-vid"
              src="https://www.youtube.com/embed/r5QPd_XUwLY?si=U7RfXyzJJeVPb2Vu&amp;start=175"
              title="idiotbox"
              frameborder="0"
              allowfullscreen></iframe>
            )}

            {open === "wm" && (
              <iframe className="modal-vid"
              title="wrong-man"
              src="https://www.youtube.com/embed/Zs2X5-LR_Yk?si=p-LglHoPhNTsGFbU?autoplay=1"
              autoplay
              frameborder="0"
              allowfullscreen></iframe>
            )}

            {open === "beacon" && (
              <iframe className="modal-vid"
              title="beacon"
              src="https://www.youtube.com/embed/ksSO_TW3liE?si=ChmZ6e0gG5MQyVDq"
              autoplay
              frameborder="0"
              allowfullscreen></iframe>
            )}

            <p className="closeBtn" onClick={onClose}>close</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
