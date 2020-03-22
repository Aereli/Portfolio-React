import React from "react"
import "../stylesheets/work.css"
import Shipship from "../images/shipship.png"
import Barhop from "../images/barhop.png"
import Splttr from "../images/splttr.png"
import AereliArt from "../images/aereliArt.png"
import { FaGithub, FaLink } from "react-icons/fa"

import github from "../images/github-brands.svg"
import linkedin from "../images/linkedin.svg"

// import SplitString from "../components/stringSplitter"
import Navbar from "../components/Nav"

class Work extends React.Component {
  render() {
    return (
      <div>
        <h1 className="work-header">OYANADEL</h1>
        <Navbar />
        <h4 className="work-title-two">
          {" "}
          Please be patient as links load. They are on a free tier.{" "}
        </h4>

        <div className="work-image-container">
          <div className="card">
            <div className="front">
              <img className="work-projects" src={Shipship} alt="shiphip"></img>
            </div>
            <div className="back">
              <div className="back-content-middle">
                <h4>Tools Used</h4>
                <p>React Js</p>
                <p>React Spring + React Scroll</p>
                <p>Ruby on Rails</p>
                <p>Devise Gem</p>
                <p>FormSpree</p>
                <div className="work-github">
                  <a
                    href="https://wyn-shipship.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://github.com/Aereli/ShipShip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="front">
              <img
                className="work-projects"
                src={AereliArt}
                alt="aereliArt"
              ></img>
            </div>
            <div className="back">
              <div className="back-content-middle">
                <p>Gatsby</p>
                <p>React</p>
                <p>Graphql</p>
                <p> SCSS</p>
                <div className="work-github">
                  <a
                    href="https://www.aereli.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://github.com/Aereli/AereliArt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="front">
              <img className="work-projects" src={Barhop} alt="Barhop"></img>
            </div>
            <div className="back">
              <div className="back-content-middle">
                <h4>Tools Used</h4>
                <p>React Js</p>
                <p>HTML + CSS</p>
                <div className="work-github">
                  <a
                    href="http://barhop-wyncode.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://github.com/Aereli/Bar_hop_final"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="front">
              <img className="work-projects" src={Splttr} alt="Splttr"></img>
            </div>
            <div className="back">
              <div className="back-content-middle">
                <h4>Tools Used</h4>
                <p>Vanilla Javascript</p>
                <p>CSS</p>
                <div className="work-github">
                  <a
                    href="https://aereli.github.io/Tip-Calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://github.com/Aereli/Tip-Calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
