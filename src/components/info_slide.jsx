import { motion, AnimatePresence } from 'framer-motion'
import './info_slide.css'

export default function InfoSlide({projects, showInfo}) {

  const initialValues = { y: 200 };
  const animateValues = { y: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] } }
  const exitValues = { y: 500, transition: { duration: 3, ease: [0.20, 0, 0.13, 1] } }

  return (
    <>
      {projects.map((project) => {
        return (
          <AnimatePresence>
            {!showInfo ? null : (
              showInfo === project.project && (
                <motion.div
                  className="project-info"
                  initial={initialValues}
                  animate={animateValues}
                  exit={exitValues}
                >
                  <h2>{project.description}</h2>
                  <p><em>{project.client}</em></p>
                </motion.div>
              )
            )
          }
          </AnimatePresence>
          )}
        )
      }
    </>
  )
}
