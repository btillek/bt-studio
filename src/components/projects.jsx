import React, { useState } from 'react'
import ModalNerd from './modals/modal_nerd'
import ModalWm from './modals/modal_wm'
import ModalBeacon from './modals/modal_beacon'
import ModalMaya from './modals/modal_maya'
import ModalIdiotbox from './modals/modal_idiotbox'
import ModalCabin from './modals/modal_cabin'
import ModalDice from './modals/modal_dice'
import ModalGrad from './modals/modal_grad'
import InfoSlide from './info_slide'

function Projects() {

  const [showNerd, setShowNerd] = useState(false)
  const [showWm, setShowWm] = useState(false)
  const [showBeacon, setShowBeacon] = useState(false)
  const [showMaya, setShowMaya] = useState(false)
  const [showIdiotbox, setShowIdiotbox] = useState(false)
  const [showCabin, setShowCabin] = useState(false)
  const [showDice, setShowDice] = useState(false)
  const [showGrad, setShowGrad] = useState(false)

  const [nerdHidden, setNerdHidden] = useState(true);
  const [gradHidden, setGradHidden] = useState(true);
  const [diceHidden, setDiceHidden] = useState(true);
  const [cabinHidden, setCabinHidden] = useState(true);
  const [mayaHidden, setMayaHidden] = useState(true);
  const [idiotboxHidden, setIdiotboxHidden] = useState(true);
  const [wmHidden, setWmHidden] = useState(true);
  const [beaconHidden, setBeaconHidden] = useState(true);

  const modalAnimation = {
    overlayInitial: { y: window.innerHeight },
    overlayAnimate: { y: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] } },
    overlayExit: { y: window.innerHeight, transition: { duration: 1, delay: 0.5, ease: [0.20, 0, 0.13, 1] } },
    modalInitial: { opacity: 0 },
    modalAnimate: { opacity: 1, transition: { duration: 1, delay: 1 } },
    modalExit: { opacity: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="project-container">
      <h3>Selected projects: </h3><br />

      <h2 onClick={() => setShowNerd(true)} onMouseEnter={() => setNerdHidden(false)} onMouseLeave={() => setNerdHidden(true)} className="link">
        N*E*R*D "In Search Of..."</h2>
        2022 <br />
      <ModalNerd
        key="nerd"
        animation={modalAnimation}
        open={showNerd}
        onClose={() => setShowNerd(false)}
      />

      <h2 onClick={() => setShowGrad(true)} onMouseEnter={() => setGradHidden(false)} onMouseLeave={() => setGradHidden(true)} className="link">
        Kanye West "Graduation" Anniversary</h2>
        2022 <br />
      <ModalGrad
        open={showGrad}
        animation={modalAnimation}
        onClose={() => setShowGrad(false)}
      />

      <h2 onClick={() => setShowDice(true)} onMouseEnter={() => setDiceHidden(false)} onMouseLeave={() => setDiceHidden(true)} className="link">
        DICE Logo</h2>
        2022 <br />
      <ModalDice
        open={showDice}
        animation={modalAnimation}
        onClose={() => setShowDice(false)}
        />

      <h2 onClick={() => setShowCabin(true)} onMouseEnter={() => setCabinHidden(false)} onMouseLeave={() => setCabinHidden(true)} className="link">
        Cabin Fever</h2>
        2022 <br />
      <ModalCabin
        open={showCabin}
        animation={modalAnimation}
        onClose={() => setShowCabin(false)}
        />

      <h2 onClick={() => setShowMaya(true)} onMouseEnter={() => setMayaHidden(false)} onMouseLeave={() => setMayaHidden(true)} className="link">
        Maya Delilah "Silver Lining"</h2>
        2023 <br />
      <ModalMaya
        open={showMaya}
        animation={modalAnimation}
        onClose={() => setShowMaya(false)}
        />

      <h2 onClick={() => setShowIdiotbox(true)} onMouseEnter={() => setIdiotboxHidden(false)} onMouseLeave={() => setIdiotboxHidden(true)} className="link">
        Idiotbox</h2>
        2021 <br />
      <ModalIdiotbox
        open={showIdiotbox}
        animation={modalAnimation}
        onClose={() => setShowIdiotbox(false)}
        />

      <h2 onClick={() => setShowWm(true)} onMouseEnter={() => setWmHidden(false)} onMouseLeave={() => setWmHidden(true)} className="link">
        Wrong Man "Wait"</h2>
        2023 <br />
      <ModalWm
        open={showWm}
        animation={modalAnimation}
        onClose={() => setShowWm(false)}
        />

      <h2 onClick={() => setShowBeacon(true)} onMouseEnter={() => setBeaconHidden(false)} onMouseLeave={() => setBeaconHidden(true)} className="link">
        Beacon "Pay My Debts"</h2>
        2022<br />
      <ModalBeacon
        open={showBeacon}
        animation={modalAnimation}
        onClose={() => setShowBeacon(false)}
        />

      <InfoSlide hidden={nerdHidden}>
        <h2>Online advertisement promoting the release of a new line of merchandise celebrating the 20th anniversary of N*E*R*D's debut album "In Search Of..."</h2>
        <p><em>N*E*R*D, 2022</em></p>
      </InfoSlide>

      <InfoSlide hidden={gradHidden}>
        <h2>Online advertisement promoting the 15th anniversary of Kanye West's "Graduation" album</h2>
        <p><em>Universal Music Group, 2022</em></p>
      </InfoSlide>

      <InfoSlide hidden={diceHidden}>
        <h2>3 different animations for the DICE logo, displayed whenever a user purchases a ticket through the app</h2>
        <p><em>DICE.FM, 2022</em></p>
      </InfoSlide>

      <InfoSlide hidden={cabinHidden}>
        <h2>Short film about spending too much time inside, commissioned by Giphy to promote their new clips</h2>
        <p><em>Giphy, 2022</em></p>
      </InfoSlide>

      <InfoSlide hidden={mayaHidden}>
        <h2>Music video for Maya Delilah's song "Silver Lining"</h2>
        <p><em>Capitol Music Group, 2023</em></p>
      </InfoSlide>

      <InfoSlide hidden={idiotboxHidden}>
        <h2>Short animated interlude for Idiotbox, a film about pro surfer Kael Walsh. Directed by Wade Carroll</h2>
        <p><em>Quicksilver, 2021</em></p>
      </InfoSlide>

      <InfoSlide hidden={wmHidden}>
        <h2>Music video for the song "Wait" by Wrong Man</h2>
        <p><em>Thirty Something Records, 2023</em></p>
      </InfoSlide>

      <InfoSlide hidden={beaconHidden}>
        <h2>Music video for Beacon's "Pay My Debts"</h2>
        <p><em>Apparent Movement, 2022</em></p>
      </InfoSlide>

      <div className="socials">
        <a href="https://www.instagram.com/boytillek/?hl=nl" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/boytillekens" target="_blank" rel="noreferrer">Linkedin</a>
      </div>
    </div>
  )
}

export default Projects
