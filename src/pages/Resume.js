import React from "react";

const Resume = () => {
    return (
        <div>
            <h3>Resume</h3>
            <p>Download my <a href="../../public/Ezequiel Mejias Resume.pdf">resume</a></p>

            <h4>Front-end Technologies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
            </ul>

            <h4>Back-end Technologies</h4>
            <ul>
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
};

export default Resume;