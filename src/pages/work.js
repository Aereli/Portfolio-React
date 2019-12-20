import React from 'react'
import '../stylesheets/work.css'
import Shipship from '../images/shipship.png'
import Barhop from '../images/barhop.png'
import Github from '../images/github-brands.svg'
import Splttr from '../images/splttr.png'
import { FaGithub } from "react-icons/fa";


class Work extends React.Component{
  render(){
    const string = "oyanadel"
    const splitstring = string.split("")
    return(
      <div>
        <h1 className="work-header">
          <a href="/">
            {
              splitstring.map(letter => (
                <span className="each-letter-lrg">{letter}</span>
              ))
            }
          </a>
        </h1>
        <h3 className="work-title"> Past Web Projects</h3>
        
        <div className="work-image-container">
          <div>
            <a href="https://wyn-shipship.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="work-projects" src={Shipship} alt="shiphip"></img></a>
              <p> Site displays understandment of REST from the EasyPost API and demonstrates a solid foundation of a Rails database of user information.</p>
              <div className="work-github">
                <a href="https://github.com/Aereli/ShipShip" target="_blank" rel="noopener noreferrer" ><img src={Github} alt="github-icon"></img></a> 
              </div>
          </div>
          <div>
            <a href="http://barhop-wyncode.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className="work-projects" src={Barhop} alt="Barhop"></img>
            </a>
            <p>Team of three developers to create information of nearest bars within user location entered. shows good use of REST with the Yelp API. Two week project</p>
            <div className="work-github">
              <a href="https://github.com/Aereli/Bar_hop_final" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github-icon"></img></a> 
            </div>
          </div>
          <div className="image-container">
            <a href="https://aereli.github.io/Tip-Calculator/" target="_blank" rel="noopener noreferrer">
              <img className="work-projects" src={Splttr} alt="Splttr" ></img>
              <p>Nice little Tip calculator with great example of Readline Sync</p>
            </a>
            <div className="work-github">
              <a href="https://github.com/Aereli/Tip-Calculator" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github-icon"></img></a> 
            </div>
          </div>

          <div className="card">
            <div className="front">
              <img src={Splttr} alt="Splttr" ></img>
            </div>
            <div className="back">
              <div className="back-content-middle">
                <h2>Content and some other text</h2>
                <div class="project-anchors">
                  <a href="https://github.com/Aereli" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
                  <a href="https://github.com/Aereli" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
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