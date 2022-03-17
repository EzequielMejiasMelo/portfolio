import React from "react";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className="container spacer">
        <h2 className="text-white" id="about-me">
          About Me
        </h2>
        <article>
          <p className="text-white">
            Hey, I'm Ezequiel. I've been interested in technology for as long as
            I can remember. Currently I am a enrolled in UCF's Full Stack
            Development program. I pride myself on my communication skills and
            my ability to collaberate even with diverse teams. I've been working
            with some of my classmates and close friends to make the sometimes
            challenging process of becoming an engineer easier.
          </p>
          <br />
          <div className="row">
            <div className="col">
              <h4 className="text-white">Front-end Technologies</h4>
              <ul>
                <li className="text-white">HTML</li>
                <li className="text-white">CSS</li>
                <li className="text-white">JavaScript</li>
                <li className="text-white">jQuery</li>
                <li className="text-white">React</li>
              </ul>
            </div>
            <div className="col">
              <h4 className="text-white">Back-end Technologies</h4>
              <ul>
                <li className="text-white">APIs</li>
                <li className="text-white">Node.js</li>
                <li className="text-white">Express</li>
                <li className="text-white">MySQL</li>
                <li className="text-white">MongoDB</li>
                <li className="text-white">GraphQL</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
