import React from 'react'
import '../stylesheets/work.css'
import Shipship from '../images/shipship.png'
import Barhop from '../images/barhop.png'
import Splttr from '../images/splttr.png'
import { FaGithub, FaLink } from "react-icons/fa";
import SplitString from '../components/stringSplitter'

class Work extends React.Component{
  render(){
    return(
      <div>
        <h1 className="work-header">
          <SplitString />
        </h1>
        <h3 className="work-title"> Past Web Projects</h3>
        <h4 className="work-title-two"> Please be patient as links load. They are on a free tier. </h4>
        
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
                  <a href="https://wyn-shipship.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FaLink className="footer-github"/></a>
                  <a href="https://github.com/Aereli/ShipShip" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
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
                  <a href="http://barhop-wyncode.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FaLink className="footer-github"/></a>
                  <a href="https://github.com/Aereli/Bar_hop_final" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="front">
                <img className="work-projects" src={Splttr} alt="Splttr" ></img>          
            </div>
            <div className="back">
              <div className="back-content-middle">
              <h4>Tools Used</h4>
                <p>Vanilla Javascript</p>
                <p>CSS</p>
                <div className="work-github">
                  <a href="https://aereli.github.io/Tip-Calculator/" target="_blank" rel="noopener noreferrer"><FaLink className="footer-github"/></a>
                  <a href="https://github.com/Aereli/Tip-Calculator"target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-github"/></a>
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