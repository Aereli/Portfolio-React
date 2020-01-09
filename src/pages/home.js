import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../stylesheets/home.css'
import Face from '../images/face_three_parts.svg'
// import Github from '../images/github-brands.svg'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import SplitString from '../components/stringSplitter'


class Home extends React.Component{
  
  render(){
    const string2 = "work"
    const splitString2 = string2.split("")
    const string3 = "contact"
    const splitString3 = string3.split("")
    return(
      <div>
        <Router>
          <h1 className="home-header">
            <SplitString />
          </h1>
          <h2 className="home-header-desc">full stack web developer</h2>
          <div className="nav-link-container">
            <h2 className="home-nav-link">
              <a href="/work">
                {
                  splitString2.map(letter => (
                    <span className="each-letter-sml">{letter}</span>
                  ))
                }
              </a>         
            </h2>
          <h2 className="home-nav-link">
            <a href="/contact">
              {
                splitString3.map(letter => (
                  <span className="each-letter-sml">{letter}</span>
                ))
              }
            </a>   
          </h2>
        </div>
        </Router>
        <div className="home-face-container">
          <img src={Face} alt="face" className="home-face-image"/>
        </div> 
        <footer className="home-footer">
          <div>
            <a href="https://www.linkedin.com/in/eric-oyanadel/" target="_blank" rel="noopener noreferrer" ><IoLogoLinkedin className="footer-github"/></a>
            <a href="https://github.com/Aereli" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
          </div>
            © {new Date().getFullYear()}, from scratch by Eric   
        </footer>
      </div>
    )
  }
}
export default Home