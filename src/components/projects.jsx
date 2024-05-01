import React, { useState } from 'react'

import { PROJECTS } from '../data'
import ProjectModal from './project_modal'
import InfoSlide from './info_slide'

function Projects() {

  const [showProject, setShowProject] = useState(null)
  const [showInfo, setShowInfo] = useState(null)

  return (
    <div className="project-container">
      <h3>Selected projects: </h3><br />

      {PROJECTS.map(({project, title, year}) => {
        return (
          <div key={project}>
          <h2 onClick={() => setShowProject(project)} onMouseEnter={() => setShowInfo(project)} onMouseLeave={() => setShowInfo(null)} className="link">
            {title}</h2>
            {year}<br />
          </div>
        )
      })}

      <ProjectModal
        open={showProject}
        onClose={() => setShowProject(null)}
      />

      <InfoSlide projects={PROJECTS} showInfo={showInfo}/>

      <div className="socials">
        <a href="https://www.instagram.com/boytillek/?hl=nl" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/boytillekens" target="_blank" rel="noreferrer">Linkedin</a>
      </div>
    </div>
  )
}

export default Projects
