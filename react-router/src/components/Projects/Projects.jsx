import React from "react";
import "./Projects.css"
import { NavLink } from "react-router-dom"


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Jeopardy 1",
      languages: ["HTML", "CSS"],
      description: "Static Layouts of Jeopardy Rounds",
    },
    {
      id: 2,
      name: "Guess the number",
      languages: ["JavaScript"],
      description: "Play guess the number against the computer!",
    },
    {
      id: 3,
      name: "Zorkington",
      languages: ["JavaScript"],
      description: "A terminal based adventure game based off of Zork.",
    },
    {
      id: 4,
      name: "Jeopardy 2",
      languages: ["JavaScript", "HTML", "CSS"],
      description: "Functional Jeopardy game",
    },
    {
      id: 5,
      name: "Server Blog",
      languages: ["JavaScript"],
      description:
        "An express application with endpoints to mimic a blog, allowing CRUD operations",
    }
  ];

  const randomColorVal = () => Math.floor(Math.random() * 256);


  return (
    <div className="page" style={{ background: "darkgreen" }}>
      <h1>My Projects</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project) => {
            let projectColor = `rgb(${randomColorVal()} , ${randomColorVal()}, ${randomColorVal()})`
          
            project.background = projectColor
          
            return (
            <div key={project.id} className="project" style={{background: projectColor}}>
              <h2>Name: {project.name}</h2>

              <NavLink to={`/projects/${project.id}`} state={{project}}>View Details</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
