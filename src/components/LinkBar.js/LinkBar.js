import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const LinkBar = ({ orientation }) => {
  return (
    <div className={orientation === "horizontal" ? null : null} id="link-bar">
      <a
        href="mailto: ezequiel.mejiasmelo@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGoogle} size="3x" />
      </a>
      <a
        href="https://github.com/EzequielMejiasMelo"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/ezequiel-mejias-melo"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
};

export default LinkBar;
