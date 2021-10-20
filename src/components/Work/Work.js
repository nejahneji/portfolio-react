import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-item">
        <h1>todo App</h1>
        <img src="todo-app.png" alt="" />
        <p>HTML / CSS / javaScript / reactjs / redux / mdbbootstrap</p>
      </div>
      <div className="work-item">
        <h1>movie App</h1>
        <div className="movie-app">
          <img src="movie-app1.png" alt="" />
          <img src="movie-app2.png" alt="" />
        </div>
        <p>HTML / CSS / javaScript / reactjs /reactBootstrap</p>
      </div>
      <div className="work-item">
        <h1>pizza App</h1>
        <div className="pizza-app">
          <img src="pizza-app1.png" alt="" />
          <img src="pizza-app2.png" alt="" />
          <img src="pizza-app3.png" alt="" />
        </div>
        <p>javaScript / reactjs / redux / nodejs / express / mongoDB</p>
      </div>
    </div>
  );
};

export default Work;
