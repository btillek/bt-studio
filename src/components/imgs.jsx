import Layer1 from './images/new-layer1.png'
import Layer2 from './images/new-layer2.png'
import Layer3 from './images/layer3.gif'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function Imgs() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pics = [
    {
      src: Layer1,
      scale: scale6,
      pic: "layer1"
    },
    {
      src: Layer2,
      scale: scale4,
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
