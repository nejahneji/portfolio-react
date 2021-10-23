import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>front-end</h1>
      <div className="skills">
        
        <div className="skills-item">
          <img src="html.ico" alt=""  />
          <h4>HTML5</h4>
        </div>
        <div className="skills-item">
          <img src="css.ico" alt="" />
          <h4>CSS3</h4>
        </div>
        <div className="skills-item">
          <img src="javascript.ico"alt=""  />
          <h4>javaScript</h4>
        </div>
        <div className="skills-item">
          <img src="bootstrap.ico"alt=""  />
          <h4>bootstrap</h4>
        </div>
        <div className="skills-item">
          <img src="react.ico" alt="" />
          <h4>reactjs</h4>
        </div>
        <div className="skills-item">
          <img src="redux.ico" alt="" />
          <h4>redux</h4>
        </div>
      </div>
      <h1>backend</h1>
      <div className="skills">
        
        <div className="skills-item">
          <img src="express.ico" alt="" />
          <h4>express</h4>
        </div>
        <div className="skills-item">
          <img src="nodejs.ico" alt="" />
          <h4>nodejs</h4>
        </div>
      </div>
      <h1>data-base</h1>
      <div className="skills">
        
        <div className="skills-item">
          <img src="mongodb.ico" alt="" />
          <h4>mongoDB</h4>
        </div>
      </div>
      <h1>tools</h1>
      <div className="skills">
        
        <div className="skills-item">
          <img src="git.ico" alt="" />
          <h4>git</h4>
        </div>
        <div className="skills-item">
          <img src="github.ico" alt="" />
          <h4>github</h4>
        </div>
        <div className="skills-item">
          <img src="vscode.ico" alt="" />
          <h4>Vscode</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
