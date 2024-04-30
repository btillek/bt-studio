import { motion, AnimatePresence } from 'framer-motion'

export default function InfoSlide({children, hidden}) {

  const initialValues = { y: 200 };
  const animateValues = { y: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] } }
  const exitValues = { y: 500, transition: { duration: 3, ease: [0.20, 0, 0.13, 1] } }

  return (
    <AnimatePresence>
      { hidden ? null :
        <motion.div
          className="project-info"
          initial={initialValues}
          animate={animateValues}
          exit={exitValues}
        >
          {children}
        </motion.div>
      }
    </AnimatePresence>
  )
}
