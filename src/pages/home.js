import React from "react"
import "../stylesheets/home.css"
import SplitString from "../components/stringSplitter"
import Toggle from "../components/toggle"
import Circles from "../components/Circle"

import github from "../images/github-brands.svg"
import linkedin from "../images/linkedin.svg"

class Home extends React.Component {
  render() {
    // const string2 = "© 2020, from scratch by Eric"
    // const splitString2 = string2.split("")
    // const string3 = "contact"
    // const splitString3 = string3.split("")
    return (
      <div>
        <div className="header">
          <div className="header-title">
            <a className="header-a" href="/">
              Eric Oyanadel
            </a>
            <h3 id="under-construction"> Page is Under Construction</h3>
          </div>
          <ul className="header-links">
            <li>
              <a className="header-a" href="/work">
                work
              </a>
            </li>
            <li>
              <a className="header-a" href="/contact">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="home-body">
          <div>
            <Toggle />
          </div>
        </div>
        <div class="home-icons">
          <div className="face-image">
            <Circles />
          </div>
          <div>
            <a
              index="home"
              href="https://www.linkedin.com/in/eric-oyanadel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icons" src={github} alt="github" />
            </a>
            <a
              index="home"
              href="https://github.com/Aereli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icons" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <footer className="home-footer">
          <SplitString />
        </footer>
      </div>
    )
  }
}
export default Home
