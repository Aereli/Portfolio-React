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
          <div>
            <a href="https://wyn-shipship.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Shipship} alt="shiphip"></img></a>
              <p> Site displays understandment of REST from the EasyPost API and demonstrates a solid foundation of a Rails database of user information.</p>
          </div>
          <div>
            <a href="http://barhop-wyncode.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Barhop} alt="shiphip"></img></a>
            <p>Team of three developers to create information of nearest bars withing user location entered. shows good use of REST with the Yelp API. Two week project</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work