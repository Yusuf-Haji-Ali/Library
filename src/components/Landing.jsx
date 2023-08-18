import React from "react";
import ReadingImg from "../assets/reading.svg";

const Landing = () => {
  return (
    <section id="landing-page">
      <header>
        <div className="header-container">
          <div className="header-description">
            <h1>The UK's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
            <div className="header-img">
              <img src={ReadingImg} alt="" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
