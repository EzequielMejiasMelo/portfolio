import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="headings" id="about-me">
        About Me
      </h2>
      <article className="content mb-4">
        <p>
          Hey, I'm Ezequiel. I've been interested in technology for as long as I
          can remember. Currently I am a enrolled in UCF's Full Stack
          Development program.
        </p>
        <br />
        <p>
          I pride myself on my communication skills and my ability to
          collaberate even with diverse teams. I've been working with some of my
          classmates and close friends to make the sometimes challenging process
          of becoming an engineer easier.
        </p>
        <br />
        <h4>Future Ventures (Teach/Develop myself)</h4>
        <ul>
          <li>Scalable distributed systems(infrastructure, networks, microservices)</li>
          <li>Machine Learning</li>
          <li>Security</li>
          <li>Program to reaveal lottery numbers</li>
        </ul>
      </article>
    </div>
  );
};

export default About;