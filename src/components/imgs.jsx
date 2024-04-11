import Picture2 from './images/5.gif'
import Picture3 from './images/6.gif'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function Imgs() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 4])

  const pics = [
    {
      src: Picture2,
      scale: scale6,
      pic: "pic2"
    },
    {
      src: Picture3,
      scale: scale4,
      pic: "pic3"
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
