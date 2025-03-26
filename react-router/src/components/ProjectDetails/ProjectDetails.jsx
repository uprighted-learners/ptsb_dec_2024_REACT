import React from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import "./ProjectDetails.css"

const ProjectDetails = () => {
    // Allows us to navigate elsewhere
    const navigate = useNavigate()

    // Allows access to current location, or state, if it was provided to NavLink
    const location = useLocation()
    const { project } = location.state || {}

  return (
    <div className='page'>
        <button onClick={() => navigate(-1)}>⬅️ Go Back</button>
        <div className='project-details' style={{ background: project.background}} >
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
            <h4><b>Languages: </b> {project.languages.join(", ")} </h4>
        </div>
    </div>
  )
}

export default ProjectDetails