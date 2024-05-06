import Layer1 from './images/new-layer1.png'
import Layer2 from './images/new-layer2.png'
// import Layer3 from './images/layer3.gif'
import './imgs.css'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function Imgs() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pics = [
    {
      src: Layer1,
      scale: scale2,
      pic: "layer1"
    },
    {
      src: Layer2,
      scale: scale1,
      pic: "layer2"
    }
    // ,
    // {
    //   src: Layer3,
    //   scale: scale4,
    //   pic: "layer3"
    // }
  ]

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {
          pics.map(({src, scale, pic}, i) => {
            return <motion.div style={{scale: scale}} key={i} className="element">
            <div className={ pic }>
              <img className="image" style={{filter: `blur(${scale}})`}} src={src} alt="img" />
            </div>
          </motion.div>
          })
        }
      </div>
    </div>
  )
}
