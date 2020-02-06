import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../stylesheets/home.css'
import Face from '../images/face_three_parts.svg'
// import Github from '../images/github-brands.svg'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import SplitString from '../components/stringSplitter'
import Toggle from '../components/toggle'
import paralaxCircles from '../components/paralax'

class Home extends React.Component{
 
  render(){
    // const string2 = "work"
    // const splitString2 = string2.split("")
    // const string3 = "contact"
    // const splitString3 = string3.split("")
    return(
      <div>
          <div className="header">
            <div className="header-title">
              <a className="header-a" href="/">Eric</a>
            </div>
              <ul className="header-links">
                <li>
                  <a className="header-a" href="/work">work</a>
                </li>
                <li>
                  <a className="header-a" href="/contact">contact</a>
                </li>
              </ul>
          </div>
          <div className="home-body">
            <div>
              <Toggle />
            </div>
              <div className="home-circles">
                <div id="circle1">
                  <div id="circle2">
                    <div id="circle3">
                      <div id="circle4">
                        <div id="circle5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src={Face} alt="face" className="home-face-image"/> */}
          </div>
        <footer className="home-footer">
          <div>
            <a index="home" href="https://www.linkedin.com/in/eric-oyanadel/" target="_blank" rel="noopener noreferrer" ><IoLogoLinkedin className="footer-github"/></a>
            <a index="home" href="https://github.com/Aereli" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
          </div>
            © {new Date().getFullYear()}, from scratch by Eric   
        </footer>
      </div>
    )
  }
}
export default Home