import React from "react"
import "../stylesheets/work.css"
import Shipship from "../images/shipship.png"
import Barhop from "../images/barhop.png"
import Splttr from "../images/splttr.png"
import AereliArt from "../images/aereliArt.png"
import github from "../images/github_1.png"
import linkedin from "../images/linkedin_1.png"

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
                <h4>React Js</h4>
                <h4>React Spring + React Scroll</h4>
                <h4>Ruby on Rails</h4>
                <h4>Devise Gem</h4>
                <h4>FormSpree</h4>
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
                <h4>Gatsby</h4>
                <h4>React</h4>
                <h4>Graphql</h4>
                <h4> SCSS</h4>
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
                <h4>React Js</h4>
                <h4>HTML + CSS</h4>
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
                <h4>Vanilla Javascript</h4>
                <h4>CSS</h4>
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
