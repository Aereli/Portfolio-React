import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../stylesheets/home.css'
import Face from '../images/face_black.svg'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Router>
            <h1 className="home-header"><a href ="/">Oyanadel</a></h1>
            <h1 className="home-nav-link"><a href ="/work">Work</a></h1>
        </Router>
        <div>
          <img src={Face} alt="face" className="home-face-image" />
        </div> 
        <footer className="home-footer">
            © {new Date().getFullYear()}, from scratch by Eric
              {` `}
        </footer>
      </div>
    )
  }
}
export default Home