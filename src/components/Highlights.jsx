import React from "react";
import Highlight from "./book/highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section-title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight-wrapper">
            <Highlight
              icon={"bolt"}
              subtitle={"Quick & Easy"}
              para={"Get access to your favourite books online easily"}
            />
            <Highlight
              icon={"book-open"}
              subtitle={"10,000+ Books"}
              para={"Library houses books in all your favourite categories"}
            />
            <Highlight
              icon={"tags"}
              subtitle={"Affordable"}
              para={"Get your hands on popular books for less than £10"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
