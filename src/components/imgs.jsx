import Picture2 from './images/2.gif'
import Picture3 from './images/3.gif'
import Picture4 from './images/4.gif'
import Picture5 from './images/5.gif'
import Picture6 from './images/lines.gif'
import Picture7 from './images/7.png'
import Picture8 from './images/8.gif'
import Picture9 from './images/9.gif'
import Picture10 from './images/10.png'
import Picture11 from './images/11.gif'
import Picture12 from './images/12.png'
import Picture13 from './images/13.gif'
import Layer1 from './images/layer1.gif'
import Picture14 from './images/14.png'
import Picture15 from './images/15.png'
import Picture16 from './images/15.png'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function Imgs() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])

  const pics = [
    {
      src: Picture2,
      scale: scale4,
      pic: "pic2"
    },
    // {
    //   src: Picture3,
    //   scale: scale4,
    //   pic: "pic3"
    // },
    // {
    //   src: Picture4,
    //   scale: scale6,
    //   pic: "pic4"
    // },
    {
      src: Picture5,
      scale: scale6,
      pic: "pic5"
    },
    {
      src: Picture6,
      scale: scale4,
      pic: "pic6"
    },
    {
      src: Picture7,
      scale: scale6,
      pic: "pic7"
    },
    {
      src: Picture8,
      scale: scale4,
      pic: "pic8"
    },
    {
      src: Picture9,
      scale: scale4,
      pic: "pic9"
    },
    {
      src: Picture10,
      scale: scale6,
      pic: "pic10"
    },
    {
      src: Picture11,
      scale: scale6,
      pic: "pic11"
    },
    // {
    //   src: Picture12,
    //   scale: scale6,
    //   pic: "pic12"
    // },
    {
      src: Picture13,
      scale: scale6,
      pic: "pic13"
    },
    // {
    //   src: Layer1,
    //   scale: scale6,
    //   pic: "pic14"
    // }
    {
      src: Picture14,
      scale: scale4,
      pic: "pic14"
    },
    {
      src: Picture15,
      scale: scale4,
      pic: "pic15"
    },
    {
      src: Picture16,
      scale: scale6,
      pic: "pic16"
    }
  ]

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {
          pics.map(({src, scale, pic}, i) => {
            return <motion.div style={{scale: scale}} key={i} className="element">
            <div className={ pic }>
              <img className="image" src={src} alt="img" />
            </div>
          </motion.div>
          })
        }
      </div>
    </div>
  )
}
