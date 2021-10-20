import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="title">
          <h1>
              <p>hi,</p>
              <p>I am Nejah</p>
              <p>FullStack js developper</p>
          </h1>
          <Link to='/about'>
              <button>More info</button>
          </Link>
      </div>
      <div className="person">
          <img src='nejah.jpg' alt='person picture'/>
      </div>
    </div>
  );
};

export default Home;
