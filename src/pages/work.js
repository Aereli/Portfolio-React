import React from 'react'
import '../stylesheets/work.css'
import Shipship from '../images/shipship.png'
import Barhop from '../images/barhop.png'

class Work extends React.Component{
  render(){
    return(
      <div>
        <h1 className="work-header"><a href ="/">Oyanadel</a></h1>

        <h3 className="work-title"> Past Web Projects</h3>
        <div className="work-image-container">
          <img src={Shipship} alt="shiphip"></img>
          <img src={Barhop} alt="shiphip"></img>
        </div>
      </div>
    )
  }
}

export default Work