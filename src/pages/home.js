import React from "react"
import "../stylesheets/home.css"
// import Face from "../images/face_three_parts.svg"
// import Github from '../images/github-brands.svg'
import { IoLogoLinkedin } from "react-icons/io"
import { FaGithub } from "react-icons/fa"
import SplitString from "../components/stringSplitter"
import Toggle from "../components/toggle"
import Circles from "../components/Circle"

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
          <Circles />
          {/* <img src={Face} alt="face" className="home-face-image"/> */}
        </div>
        <div class="home-icons">
          <a
            index="home"
            href="https://www.linkedin.com/in/eric-oyanadel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="footer-github" />
          </a>
          <a
            index="home"
            href="https://github.com/Aereli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-github" />
          </a>
        </div>
        <footer className="home-footer">
          <SplitString />
        </footer>
      </div>
    )
  }
}
export default Home
