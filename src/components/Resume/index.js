import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Michael Giddings</h2>
          <ul>
            <li>
              Core competencies in enterpirse content management, full-stack web
              development, data architecture, and managing integrations.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/michaelgiddings/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/fondofhats/react-portfolio/blob/main/docs/MichaelGiddingsResume.docx?raw=true"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <p>
            SDL Tridion, Adobe Experience Manager (6.5, As a cloud Service)
            C#.NET, ASP.NET, JAVA,{" "}
          </p>
          <p>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery,
            React.js, IndexedDB,
          </p>
          <p>Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
