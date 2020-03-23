import React from "react"
import "../stylesheets/home.css"
import SplitString from "../components/stringSplitter"
import Face from "../components/face"
import github from "../images/github_1.png"
import linkedin from "../images/linkedin_1.png"

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-title">
            <a className="header-a" href="/">
              Eric Oyanadel
            </a>
            {/* <h3 id="under-construction"> Page is Under Construction</h3> */}
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
        <div className="home-body"></div>
        <div class="home-icons">
          <div className="face-image">
            <Face />
          </div>
        </div>
        <div className="home-icons-contatiner">
          <a
            index="home"
            href="https://www.linkedin.com/in/eric-oyanadel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icons" src={linkedin} alt="linkedin" />
          </a>
          <a
            index="home"
            href="https://github.com/Aereli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icons" src={github} alt="github" />
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
