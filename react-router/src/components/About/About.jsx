import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
  return (
    <div className="page" style={{ background: "teal", paddingInline: "20vw" }}>
      <h1>Welcome to the about page!</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        necessitatibus, accusantium maxime unde quidem dolores error commodi
        dolor ea dolore ad eligendi beatae ipsa sed blanditiis, obcaecati minus
        ipsum porro in facere assumenda, cupiditate dignissimos adipisci nam!
        Culpa unde sequi deserunt dolore a, consequuntur, iure sed velit officia
        asperiores reprehenderit.
      </h3>

      <button onClick={() => navigate("/projects")}>You can click this to go to projects!</button>
    </div>
  );
};

export default About;
