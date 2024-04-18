import React, { useState, useRef } from 'react'
import ModalNerd from './modal_nerd'
import ModalWm from './modal_wm'
import ModalBeacon from './modal_beacon'
import ModalMaya from './modal_maya'
import ModalIdiotbox from './modal_idiotbox'
import ModalCabin from './modal_cabin'
import ModalDice from './modal_dice'
import ModalGrad from './modal_grad'

function Project1() {

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


  return (
    <div className="project-container">
      <h3>Selected projects: </h3><br />

      <h2 onClick={() => setShowNerd(true)} onMouseEnter={() => setNerdHidden(false)} onMouseLeave={() => setNerdHidden(true)} className="link">
        N*E*R*D "In Search Of..."</h2>
        Online advertisement <br />
      <ModalNerd
        open={showNerd}
        onClose={() => setShowNerd(false)}
        />

      <h2 onClick={() => setShowGrad(true)} onMouseEnter={() => setGradHidden(false)} onMouseLeave={() => setGradHidden(true)} className="link">
        Kanye West "Graduation" Anniversary</h2>
        Online advertisement <br />
      <ModalGrad
        open={showGrad}
        onClose={() => setShowGrad(false)}
      />

      <h2 onClick={() => setShowDice(true)} onMouseEnter={() => setDiceHidden(false)} onMouseLeave={() => setDiceHidden(true)} className="link">
        DICE Logo</h2>
        In-app visualizer <br />
      <ModalDice
        open={showDice}
        onClose={() => setShowDice(false)}
        />

      <h2 onClick={() => setShowCabin(true)} className="link">
        Cabin Fever</h2>
        Short film for Giphy <br />
      <ModalCabin
        open={showCabin}
        onClose={() => setShowCabin(false)}
        />

      <h2 onClick={() => setShowMaya(true)} className="link">
        Maya Delilah "Silver Lining"</h2>
        Music Video <br />
      <ModalMaya
        open={showMaya}
        onClose={() => setShowMaya(false)}
        />

      <h2 onClick={() => setShowIdiotbox(true)} className="link">
        Idiotbox</h2>
        Interlude for surf film <br />
      <ModalIdiotbox
        open={showIdiotbox}
        onClose={() => setShowIdiotbox(false)}
        />

      <h2 onClick={() => setShowWm(true)} className="link">
        Wrong Man "Wait"</h2>
        Music video <br />
      <ModalWm
        open={showWm}
        onClose={() => setShowWm(false)}
        />

      <h2 onClick={() => setShowBeacon(true)} className="link">
        Beacon "Pay My Debts"</h2>
        Music video<br />
      <ModalBeacon
        open={showBeacon}
        onClose={() => setShowBeacon(false)}
        />

      { nerdHidden ? null : <div className="project-info">
        <h2>
          Online advertisement promoting the release of a new line of merchandise celebrating the 20th anniversary of N*E*R*D's debut album "In Search Of..."
        </h2>
        <p><em>N*E*R*D</em></p>
        </div>}

      { gradHidden ? null : <h2 style={{position: "fixed", bottom: 24, marginRight: "50px", paddingTop: 12, borderTop: "0.5px solid gray"}}>
        Online advertisement promoting the 15th anniversary of Kanye West's "Graduation" album
        <br /><p><em>Universal Music Group</em></p>
        </h2> }

      { diceHidden ? null : <h2 style={{position: "fixed", bottom: 24, marginRight: "50px", paddingTop: 12, borderTop: "0.5px solid gray"}}>
        3 different animations for the DICE logo, displayed whenever a user purchases a ticket through the app.
        <br /><p><em>DICE.FM</em></p>
        </h2> }

      {/* <video style={videoStyles} controls muted crossorigin="anonymous" draggable="true" class="giphy-video" playsinline="" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRzNjJueW1pejAwNDBreTR3M29xOWNmZGU4ZTUxcDR6b2Zmd3ZteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/qipXYMHagoYkdMOSPu/giphy480p.mp4" data-giphy-id="wIJzSKEX4CkHeBg0rt"></video><br /> <br />
      <a className="link" href="#">N*E*R*D "In Search Of..."</a> <br /> <br />
      Online advertisement promoting a line of merchandise celebrating the 20th anniversary of N*E*R*D's first album "In Search Of..."
      <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />

      <video style={videoStyles} controls muted crossorigin="anonymous" draggable="true" class="giphy-video" playsinline="" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHZmaXY5ajRiZ3hoZGoxaTdneDk2dzJlZ2p1eXh3ZDdqOHgxcGd2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/wIJzSKEX4CkHeBg0rt/giphy480p.mp4" data-giphy-id="wIJzSKEX4CkHeBg0rt"></video><br /> <br />
      <a className="link" href="#">Cabin Fever</a> <br /> <br />
      Short film about cabin fever, commissioned by Giphy
      <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />

      <h2 className="link">Kanye West "Graduation" 15th Anniversary</h2>Universal Music Group<br /><br />
      <a className="link" href="https://www.instagram.com/reel/CiYwxQVjG8-/?hl=nl">Kanye West "Graduation" 15th Anniversary</a> Online advertisement
      <br /><br />
      <br /><br />
      <a className="link" href="https://www.youtube.com/watch?v=Zs2X5-LR_Yk&ab_channel=SundayDriveRecords">Wrong Man — "Wait"</a> Music video
      <br /><br />
      <a className="link" href="#">p5.js Explorations</a> Own project
      <br /><br /> */}


      {/* <video
        id="my-video"
        class="video-js"
        controls
        autoplay
        preload="auto"
        width="500"
        height="500"
        poster={Poster}
        data-setup="{}"
      >
        <source src={Video} type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser
        </p>
      </video> */}
    </div>
  )
}

export default Project1
