import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = ({ icon, subtitle, para }) => {
  return (
    <div className="highlight">
      <div className="highlight-img">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="highlight-subtitle">{subtitle}</h3>
      <p className="highlight-para">{para}</p>
    </div>
  );
};

export default Highlight;
