import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom' 
import '../stylesheets/home.css'
import Face from '../images/face_black.svg'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <h1><Link to="./home.js" className="home-header">Oyanadel</Link></h1>
          <Link to="./work.js" className="home-nav-link">Work</Link>
        </Router>
        <div>
          <img src={Face} alt="image" className="home-face-image" />
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