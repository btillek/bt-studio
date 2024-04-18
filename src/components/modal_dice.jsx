import React from 'react'
import Dice1 from './images/Dice-1.gif'
import Dice2 from './images/Dice-2.gif'
import Dice3 from './images/Dice-3.gif'



export default function ModalDice({ open, onClose }) {
  if (!open) return null

  const imgContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "90vw"
  }

  const imgStyles = {
    width: "29vw"
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div style={imgContainerStyles} >
          <img style={imgStyles} src={Dice1} alt="dice" />
          <img style={imgStyles} src={Dice2} alt="dice" />
          <img style={imgStyles} src={Dice3} alt="dice" />
        </div>
        <p onClick={onClose}>close</p>
      </div>
    </>
  )
}
